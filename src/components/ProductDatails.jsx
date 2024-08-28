import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container';


import ProductsDetailsMeddle from './ProductsDetailsMeddle';
import ProductsDetailsTop from './ProductsDetailsTop';
import ProductsDetailsBottom from './ProductsDetailsBottom';
import ProductsDetailsHeader from './ProductsDetailsHeader';



const ProductDatails = () => {
    let productId = useParams(5)

    let [info, setinfo] = useState([]);
    let getData = () => {
      axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
        setinfo(response.data);
      });
    };
    useEffect(() => {
      getData();
    }, []);
  return (          
    <section className='py-[100px]'>
      <ProductsDetailsHeader info={info} />
      <Container>
        <ProductsDetailsTop info={info} />
        <ProductsDetailsMeddle info={info} />
        <ProductsDetailsBottom info={info} />
      </Container>
    </section>
  )
}

export default ProductDatails