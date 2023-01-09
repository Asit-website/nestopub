const Property = require("../models/propertyModel");
const Users = require("../models/userModel");
class APIfeatures {
  constructor(query, queryString ) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = {...this.queryString } 
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach(e1 => delete(queryObj[e1]));
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);
    this.query.find(JSON.parse(queryStr))
    return this; 
  }
  
  sorting() { 
    if(this.queryString.sort){
      const sortBy = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy);
    }
    
    else{
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  pagination() { 
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit *1 || 9;
    const skip = (page-1) * limit;
    this.query = this.query.skip(skip).limit(limit)
    return this;
  } 

}

const propertyCtrl = {
  getProperty: async (req,res) =>{
    try {
        const property = await Property.find();
        res.json(property);
    } 
    catch (error) {
        return res.status(500).json({msg:error.message});
    }
  },

  createProperty: async (req,res) =>{
     try {
        const {property_id, propertyContent,propertyPrice,category,location, propertyArea, parking, propertyOwners,images, bedroom, Guest, bathRoom, propertyDescription} = req.body;
        
        // if(!images)
        // return res.status(400).json({msg:"plz add image"});

        // const properti = await Property.findOne({property_id});
        // if(properti)
        // return res.status(400).json({ msg: "This property already exist" });

        const newProperty = new Property({
          property_id, propertyContent,propertyPrice,category,location, propertyArea, parking, propertyOwners,images, bedroom, Guest, bathRoom, propertyDescription
        });

        await newProperty.save();
        res.json({ msg: "Created a new Property"});
     } 

     catch (error) {
        return res.status(500).json({msg:error.message});
     }
  },
  deleteProperty: async (req,res)=>{
    try {
       await Property.findByIdAndDelete(req.params.id);
       res.json({ msg: "Deleted a Property"});
    } 
    catch (error) {
       return res.status(500).json({msg:error.message});
    }
  },

  editProperty: async (req,res)=>{
    try {
        const {propertyContent,propertyPrice,category,location, propertyArea, parking, propertyOwners,images, bedroom, Guest, bathRoom, propertyDescription} = req.body;

        const updateObj = {propertyContent,propertyPrice,category,location, propertyArea, parking, propertyOwners, bedroom, Guest, bathRoom, propertyDescription}

        if(images){
          updateObj.images = images;
      }

      await Property.findOneAndUpdate({_id:req.params.id},updateObj);
      res.json({msg:"Property Update successfully"});
    } 
    
    catch (error) {
      return res.status(500).json({msg:error.message});
    }
  },

  likeProperty: async (req,res) =>{
    try {
       const property = await Property.find({_id:req.params.id, likes:req.user._id});
       if(property.length>0){
        return res.status(400).json({msg:"You liked this Property."})
       }

       const like = await Property.findOneAndUpdate({_id:req.params.id},{
        $push:{likes: req.user._id}
    }, {new:true});

      if(!like) return res.status(400).json({msg:"This Property Does not exist"});

      res.json({msg:"liked post"});
    } 
    
    catch (error) {
       return res.status(500).json({msg:error.message});
    }
  },

  unLikeProperty: async (req,res) =>{
      try {
         await Property.findOneAndUpdate({_id:req.params.id},{
             $pull:{likes: req.user._id}
         }, {new:true})

          res.json({msg:"unliked post"});
      } 
      
      catch (error) {
          return res.status(500).json({msg:error.message});
      }
  },

  getBrokerProperty: async (req,res) =>{
    try {
      const proper = await Property.find({user:req.params.id});
      res.json(proper);
    } 
    
    catch (error) {
      return res.status(500).json({msg:error.message});
    }
  }
}

module.exports = propertyCtrl;