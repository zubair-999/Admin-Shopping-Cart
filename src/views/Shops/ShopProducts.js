import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Col, Row} from "react-bootstrap";
import Product from "./Product";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {ShopProductAction} from "../../redux/actions/ShopsAction";

const Products=({match})=>{
  const shopId=match.params.id
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(ShopProductAction(shopId))
  },[dispatch, shopId])
  const Products=useSelector(state => state.Products)
  const {products, loading, error}=Products
  return(
    <>
      <h1>Product</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products && products.map((product)=> (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
export default Products;
