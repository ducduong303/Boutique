import React from 'react';
import Home from '../components/Home';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
const Routers = [
    {
        path:"/",
        exact:true,
        component:()=> <Home></Home>  
    },
    {
        path:"/product/:id-:slug",
        exact:true,
        component:({match})=> <ProductDetail match={match}></ProductDetail>  
    },
    {
        path:"/cart",
        exact:true,
        component:() => <Cart></Cart>
    },
]

export default Routers;