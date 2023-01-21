const Property = require("../models/propertyModel");
const Users = require("../models/userModel");
const { uploadToCloudinary } = require('../utils/uploadUtil');
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString }
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach(e1 => delete (queryObj[e1]));
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);
    this.query.find(JSON.parse(queryStr))
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy);
    }

    else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  pagination() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit)
    return this;
  }

};

const propertyCtrl = {
  getProperty: async (req, res) => {
    try {
      // const features = new APIfeatures(Property.find(), req.query).
      // pagination();

      // const property = await features.query;

      let limit=req.query.limit;
      let category=req.query.category;
      let sortBy=req.query.sortBy;
      let property;

      if(sortBy==="")
      {
        if(category==="all")
        {
          property = await Property.find().limit(limit);
        }
        else
        {
          property = await Property.find({category}).limit(limit);
        }
      }
      else
      {
        if(category==="all")
        {
          property = await Property.find().sort({"propertyPrice": sortBy}).limit(limit);
        }
        else
        {
          property = await Property.find({category}).sort({"propertyPrice": sortBy}).limit(limit);
        }
      }

      res.json({
        status:"success",
        result:property.length,
        property:property
      });
    }
    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  createProperty: async (req, res) => {
    try {
      const { propertyContent, propertyPrice, category, location, propertyArea, parking, bedroom, Guest, bathRoom, propertyDescription,bhk } = req.body;

      const { images } = req.files;

      var imageUrlList = [];

      for (var i = 0; i < images.length; i++) {
        // console.log(images[i].path);
        var locaFilePath = images[i].path;

        var result = await uploadToCloudinary(locaFilePath);
        imageUrlList.push(result.url);
      }

      // console.log(imageUrlList);

      const newProperty = new Property({
        propertyContent, propertyPrice, category, location, propertyArea, bhk, parking, images: imageUrlList, bedroom, Guest, bathRoom, propertyDescription, user: JSON.stringify(req.user)
      });

      const saveProp = await newProperty.save();
      res.json({ msg: "Created a new Property", data: saveProp });
    }
    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  deleteProperty: async (req, res) => {
    try {
      await Property.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Property" });
    }
    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  deletePropertyAll: async (req, res) => {
    try {
      await Property.deleteMany();
      res.json({ msg: "Deleted" });
    }
    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  editProperty: async (req, res) => {
    try {
      const { propertyContent, propertyPrice, category, location, propertyArea, parking, propertyOwners, images, bedroom, Guest, bathRoom, propertyDescription,bhk} = req.body;

      const updateObj = { propertyContent, propertyPrice, category, location, propertyArea, parking, propertyOwners, bedroom, Guest, bathRoom, propertyDescription,bhk }

      if (images) {
        updateObj.images = images;
      }
      // if (ownerImages) {
      //   updateObj.ownerImages = ownerImages;
      // }

      await Property.findOneAndUpdate({ _id: req.params.id }, updateObj);
      res.json({ msg: "Property Update successfully" });
    }

    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  likeProperty: async (req, res) => {
    try {
      const property = await Property.find({ _id: req.params.id, likes: req.user._id });
      if (property.length > 0) {
        return res.status(400).json({ msg: "You liked this Property." })
      }

      const like = await Property.findOneAndUpdate({ _id: req.params.id }, {
        $push: { likes: req.user._id }
      }, { new: true });

      if (!like) return res.status(400).json({ msg: "This Property Does not exist" });

      res.json({ msg: "liked post" });
    }

    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  unLikeProperty: async (req, res) => {
    try {
      await Property.findOneAndUpdate({ _id: req.params.id }, {
        $pull: { likes: req.user._id }
      }, { new: true })

      res.json({ msg: "unliked post" });
    }

    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getBrokerProperty: async (req, res) => {
    try {
      const proper = await Property.find({ user: req.params.id });
      res.json(proper);
    }

    catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }
};

module.exports = propertyCtrl;
