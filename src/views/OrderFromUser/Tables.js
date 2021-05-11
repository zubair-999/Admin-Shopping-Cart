import React, {useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
} from '@coreui/react'
import {useDispatch, useSelector} from "react-redux";
import {OrderFromUserAction} from "../../redux/actions/OrderFromUserAction";
import {Link} from "react-router-dom";

const getBadge = order_status => {
  switch (order_status) {
    case 'Completed': return 'success'
    case 'Delivered': return 'primary'
    case 'In progress': return 'secondary'
    case 'Cancel': return 'danger'
    case 'Not operating in this region': return 'warning'
    default: return 'primary'
  }
}
const fields = ['_id', 'order_status']

const OrderFromUser = () => {
  const dispatch = useDispatch()
  const OrderFromUser = useSelector(state => state.OrderFromUser)
  const {orderFromUser} = OrderFromUser
  useEffect(() => {
    dispatch(OrderFromUserAction())
  },[dispatch])
  return (
    <>
          <CCard>
            <CCardHeader>
              Order From User
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={orderFromUser}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'order_status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.order_status)} >
                        {item.order_status}
                      </CBadge>
                      <Link to={`/order/order-detail/${item._id}`}>
                        <CBadge style={{color:'black', float:'right'}} >
                          Details
                        </CBadge>
                      </Link>
                    </td>

                  )

              }}
            />
            </CCardBody>
          </CCard>
    </>
  )
}

export default OrderFromUser;
