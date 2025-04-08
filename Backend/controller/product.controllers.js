const Product=require("../models/product.model")
const cloudinary = require('cloudinary').v2;

// Function to create a product
exports.createProduct = async (req, res) => {
  try {
    // Check if image file exists in the request
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Upload the image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "products" }, // Folder in Cloudinary where images will be uploaded
        (error, result) => {
          if (error) return reject(error);
          resolve(result); // If successful, return the result with image URL
        }
      ).end(req.file.buffer); // End the stream and send the image buffer to Cloudinary
    });

    // Create a new product with the Cloudinary image URL
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      rating: req.body.rating,
      price: req.body.price,
      image: result.secure_url, // Cloudinary image URL
    });

    // Send success response
    res.json({
      status: 200,
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

    exports.getProduct=async(req,res)=>{
        try{
          const {category}=req.query;
          const query={};
          if(category){
            query.category=category;
          }
const product=await Product.find(query)
res.json({status:200,success:true,message:"Product Fetched Successfully",product})
        }
        catch(err){
            console.log(err);

        }
    }

    exports.getSingleProduct=async(req,res)=>{
        try{
const { id }=req.params;
const product=await Product.findOne({_id:id})
if(!product){
    return res.json({status:404,succcess:false,message:"Product not Found",product})
}
res.json({status:200,succcess:true,message:"Product Found Successfully",product})
        }
        catch(err)
        {
            console.log(err);
        }
    }

    exports.deleteProduct=async(req,res)=>{
        try{
       const { id }=req.params;
       const product=await Product.findOneAndDelete({_id:id})
       if(!product){
        return  res.json({status:404,message:"Product not found",success:false})
       }
       res.json({status:200,success:true,message:"Product deleted succeefully"})
        }
        catch(err){
            console.log(err);
        }
    }

    exports.updateProduct=async(req,res)=>{
        try{
  const {id}=req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if(!product){
   return res.josn({status:404,success:false,message:"Product not found"})

  }
  res.json({status:200,success:true,message:"Product Updated Successfully",product})
        }
        catch(err)
        {
            console.log(err);
        }
    }