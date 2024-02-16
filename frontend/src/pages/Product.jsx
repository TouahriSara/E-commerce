import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DiscriptionBox/DescriptionBox';
import RelatedProjects from '../components/RelatedProjects/RelatedProjects';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const{productId} = useParams();
  const product = all_product.find((item)=> item.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProjects/>
    </div>
  )
}
export default Product
