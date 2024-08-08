const mongoose = require("mongoose");
const fs=require("fs");

// const ProductSchema = new mongoose.Schema({
//   id: { type: Number, },
//   title: { type: String,  },
//   description: { type: String,  },
//   price: { type: Number,  },
//   discountPercentage: { type: Number,  },
//   rating: { type: Number,  },
//   stock: { type: Number,  },
//   brand: { type: String,  },
//   category: { type: String,  },
//   thumbnail: { type: String,  },
//   images: { type: [String],  },
//   tags: { type: [String] }
// });
const reviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now },
  reviewerName: String,
  reviewerEmail: String
});

const dimensionsSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number
});

const metaSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  barcode: String,
  qrCode: String
});

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  tags: [String],
  brand: String,
  sku: String,
  weight: Number,
  dimensions: dimensionsSchema,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  reviews: [reviewSchema],
  returnPolicy: String,
  minimumOrderQuantity: Number,
  meta: metaSchema,
  images: [String],
  thumbnail: String
});

//mongoose.model("Products",ProductSchema)
const ProductModel=mongoose.model('Products',ProductSchema);

// async function insertProducts(){
//   try{
//     const rawData=fs.readFileSync("./data1.json");
//     console.log(rawData)
//     const products=JSON.parse(rawData);
//     const result=await ProductModel.insertMany(products);
//     console.log(`${result.length} product(s) inserted!`);
//   }
//   catch(e){
//     console.log(e)
//   }
// }

// module.exports={insertProducts,ProductModel};
module.exports={ProductModel}
//module.exports=mongoose.model('Products',ProductSchema);