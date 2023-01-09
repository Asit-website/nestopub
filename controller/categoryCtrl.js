const Category = require("../models/CategoryModel");
const Property = require("../models/propertyModel");
// this logic is for buy rent shell
const categoryCtrl = {
    getCategories: async (req,res) =>{
        try {
             const category = await Category.find();
             res.json(category);
        } 
        
        catch (error) {
            return res.status(500).json({ msg: error.message }); 
        }
    },

    createCategories: async (req,res) =>{
        try {
            const {name} =req.body;

            const newCategory = new Category({
                name
            });
    
            await newCategory.save();  
        } 
        
        catch (error) {
            return res.status(500).json({msg:error.message});
        }
        
    },
    updateCategory: async (req, res) => {
        try {
          const {name} = req.body;
          await Category.findOneAndUpdate({_id:req.params.id},{name})
          res.json({msg:"update a category"});
        }
 
        catch (error) {
            return res.status(500).json({ msg: error.message })
}
    },

    deleteCategory: async (req,res) =>{
        try {
            const property = await Property.findOne({category:req.params.id});
            if(property)
            return res.status(400).json({msg:"Please delete all Property with a relationship"});
     
            await Category.findByIdAndDelete(req.params.id);
            res.json({msg:"Delete a category"})
        }

         catch (error) {
            return res.status(500).json({msg:error.message});
        }
    }
}

module.exports = categoryCtrl;