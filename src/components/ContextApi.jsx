import React, { createContext,useEffect,useState } from 'react'
import axios from "axios";

let ApiData = createContext()
const ContextApi = ({children}) => {
  
  let [info, setinfo] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setinfo(response.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ApiData.Provider value={info}>
    {children}
    </ApiData.Provider>
  )
}

export { ContextApi,ApiData}





// // Function to generate random colors
// const getRandomColor = () => {
//   const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange'];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // Function to generate random sizes
// const getRandomSize = () => {
//   const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
//   return sizes[Math.floor(Math.random() * sizes.length)];
// };

// // Function to generate random brands
// const getRandomBrand = () => {
//   const brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Levis'];
//   return brands[Math.floor(Math.random() * brands.length)];
// };

// const fetchProducts = async () => {
//   try {
//     // Fetch products
//     const response = await axios.get('https://dummyjson.com/products');
//     const products = response.data.products;

//     // Add random color, brand, and size to each product
//     const productsWithDetails = products.map(product => ({
//       ...product,
//       color: getRandomColor(),
//       brand: getRandomBrand(),
//       size: getRandomSize(),
//     }));

//     console.log('Products with Color, Brand, and Size:', productsWithDetails.length);
//     console.log(productsWithDetails);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };

// fetchProducts();
