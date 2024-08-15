const categories = [
  {
    category: "Women's Fashion",
    subCategory:[{
        sub:"Clothing",
    },
    {
        sub:"Footwear",
    },
    {
        sub:"Accesories",
    },
    {
        sub:"Jewellery",
    },  
        
    ]
  },
  {
    category: "Men's Fashion",
    subCategory:[ {
        sub:"Clothing",
    },
    {
        sub:"Footwear",
    },
    {
        sub:"Accesories",
    },
        
    ]
  },
  {
    category: "Electronics",
    subCategory:[
        {
            sub:"Television",
        },
        {
            sub:"Computer",
        },
        {
            sub:"Smartphone",
        },
        {
            sub:"Tablet",
        },
    ]
  },
  {
    category: "Home & Lifestyle",
    subCategory: [
        {
            sub:"Furniture",
        },
        {
            sub:"Appliances",
        },
        {
            sub:"Decor",
        },
        {
            sub:"Bedding",
        },
    ]
  },

  {
    category: "Sports & Outdoor",
    subCategory:[
        {
            sub:"Clothing",
        },
        {
            sub:"Equipment",
        },
        {
            sub:"Footwear",
        },
        {
            sub:"Accessories",
        },
    ]
  },
  {
    category: "Baby's & Toys",
    subCategory:[
        {
            sub:"Soft Toys",
        },
        {
            sub:"Board Games",
        },
        {
            sub:"Video Games",
        },
    ]
  },
  {
    category: "Health & Beauty",
    subCategory:[
        {
            sub:"Cosmetics",
        },
        {
            sub:"Skincare",
        },
        {
            sub:"Haircare",
        },
        {
            sub:"Vitamins and Supplements",
        },
    ]
  },
];

export default categories;

// Atlas atlas-zmor29-shard-0 [primary] test> db.products.distinct("category")
// [
//   'beauty',             'fragrances',
//   'furniture',          'groceries',
//   'home-decoration',    'kitchen-accessories',
//   'laptops',            'mens-shirts',
//   'mens-shoes',         'mens-watches',
//   'mobile-accessories', 'motorcycle',
//   'skin-care',          'smartphones',
//   'sports-accessories', 'sunglasses',
//   'tablets',            'tops',
//   'vehicle',            'womens-bags',
//   'womens-dresses',     'womens-jewellery',
//   'womens-shoes',       'womens-watches'
// ]