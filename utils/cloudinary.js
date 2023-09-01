const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({ 
    cloud_name: 'dpwxteaxd', 
    api_key: '684531254557728', 
    api_secret: 'cSF0X89I6mvVKflfqbYFrpz2Blc' 
  });

module.exports = cloudinary;