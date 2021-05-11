import React, {useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
} from '@coreui/react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ShopsAction} from "../../redux/actions/ShopsAction";

const fields = ['shop_name', 'email']

const Shops = () => {
  const dispatch = useDispatch()
  const Shops = useSelector(state => state.Shops)
  const {shops} = Shops
  useEffect(() => {
    dispatch(ShopsAction())
  },[dispatch])
  return (
    <>
      <CCard>
        <CCardHeader>
          Order From User
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={shops}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots = {{
              'email':
                (item)=>(
                  <td>
                    {item.email}
                    <Link to={`/shops/${item._id}`}>
                      <CBadge style={{color:'black', float:'right'}} >
                        Products
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

export default Shops;
