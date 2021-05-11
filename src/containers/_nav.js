import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Shops',
    to: '/shops',
    icon: "cil-home"
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Orders',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Order From User',
        to: '/order/order-from-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Order to Vender',
        to: '/order/order-to-vender',
      }
    ],
  },
]

export default _nav
