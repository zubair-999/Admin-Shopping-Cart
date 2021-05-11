import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'complete': return 'success'
    case 'in_progress': return 'warning'
    case 'cancel': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Order ID', 'status']

const OrderFromUser = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Order From User
              <DocsLink name="CModal"/>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default OrderFromUser;
