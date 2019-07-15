import React from 'react';
import Loadable from 'react-loadable'

import {DefaultLayout} from './containers/DefaultLayout';

function Loading() {
 return <div>Loading...</div>;
}

const Home = Loadable({
    loader: () => import('./views/Pages/Home'),
    loading: Loading,
  });
  



const routes=[
{ path: '/', exact: true, name: 'Layout', component: DefaultLayout },
{ path: '/home', exact: true, name: 'Home', component: Home },




]





export default routes;
