import React, { useEffect } from 'react'
import { ListGroup, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Message/Message'
import Loader from '../../Loader/Loader'
import {
  CCard,
  CCol,
  CRow,
  CCardBody
} from '@coreui/react'
import {
  getOrderDetail,
  deliverOrder
} from '../../redux/actions/OrderFromUserAction'
import {
  ORDER_DELIVER_RESET,
} from '../../redux/constants/Constants'


const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  // const userSignin = useSelector((state) => state.userSignin)
  // const { userInfo } = userSignin

  // if (!loading) {
  //   //   Calculate prices
  //   const addDecimals = (num) => {
  //     return (Math.round(num * 100) / 100).toFixed(2)
  //   }
  //
  //   order.itemsPrice = addDecimals(
  //     order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  //   )
  // }

  useEffect(() => {
    // if (!userInfo) {
    //   history.push('/login')
    // }


    if (!order || order._id !== orderId) {
      dispatch(getOrderDetail(orderId))
    }
  }, [dispatch, orderId, order])


  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader/>
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <CCard>
      <CCardBody></CCardBody>
      <h1>Order {order._id}</h1>
      <CRow>
        <CCol md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {order.contact_info.address}{'  '}
                <strong>Phone Number:</strong>
                {order.contact_info.contact_no}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                <Message variant='info'> {order.payment_mode}</Message>
              </p>

            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.products.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.products.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <CRow>
                        <CCol md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </CCol>
                        <CCol>
                            {item.product}
                        </CCol>
                        <CCol md={4}>
                          {item.quantity} x {item.price}Rs = {item.quantity * item.price}Rs
                        </CCol>
                      </CRow>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </CCol>
        <CCol md={4}>
          <CCard>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <CRow>
                  <CCol>Total</CCol>
                  <CCol>{order.total_price}Rs</CCol>
                </CRow>
              </ListGroup.Item>

              {loadingDeliver && <Loader />}
              {!order.isDelivered && (
                <ListGroup.Item>
                  <Button
                    type='button'
                    variant='dark'
                    className='btn btn-block'
                    onClick={deliverHandler}
                  >
                    Mark As Delivered
                  </Button>
                </ListGroup.Item>
              )}
            </ListGroup>
          </CCard>
        </CCol>
      </CRow>
    </CCard>
  )
}

export default OrderScreen;
