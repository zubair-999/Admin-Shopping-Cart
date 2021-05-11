import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const OrderFromUser = React.lazy(() => import('./views/OrderFromUser/Tables'));
const OrderDetail = React.lazy(() => import('./views/Order/OrderScreen'));
const Shops = React.lazy(() => import('./views/Shops/ShopsTable'))
const ShopProduct = React.lazy(() => import('./views/Shops/ShopProducts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/order/order-from-user', name: 'Order From User', component: OrderFromUser, exact: true},
  { path: '/order/order-detail/:id', name: 'Order Detail', component: OrderDetail },
  { path: '/shops', name: 'Shops', component: Shops, exact: true },
  { path: '/shops/:id', name: 'Shop Product', component: ShopProduct },
];

export default routes;
