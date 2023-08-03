import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
//  domain: dev-1ui7lqn51k50r2l4.uk.auth0.com
//  ID: yQzGUVnGYCJeIAyJMotAG7fMw4tKgpMT
root.render(
  <Auth0Provider
    domain="dev-1ui7lqn51k50r2l4.uk.auth0.com"
    clientId="yQzGUVnGYCJeIAyJMotAG7fMw4tKgpMT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
 <ProductsProvider>
   <FilterProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
 </ProductsProvider>
 </UserProvider>
 </Auth0Provider>
);
