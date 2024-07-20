const mongoose = require("mongoose");
const fs=require("fs");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, },
  title: { type: String,  },
  description: { type: String,  },
  price: { type: Number,  },
  discountPercentage: { type: Number,  },
  rating: { type: Number,  },
  stock: { type: Number,  },
  brand: { type: String,  },
  category: { type: String,  },
  thumbnail: { type: String,  },
  images: { type: [String],  },
  tags: { type: [String] }
});

//mongoose.model("Products",ProductSchema)
const ProductModel=mongoose.model('Products',ProductSchema);

// async function insertProducts(){
//   try{
//     const rawData=fs.readFileSync("./data.json");
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