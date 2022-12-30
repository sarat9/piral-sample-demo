import * as React from 'react';
import type { SinglePilet } from 'piral-base';

const AddToCartButton = ({  piral, addToCart, item}) => {
	
    return <button className='second-pilet-div' 
      onClick={addToCart(item)}
      style={{padding:"10px", margin:"10px", background:"deepskyblue"}}>
		    <h4>Add to cart</h4>
    </button>
}

// allow-unused-export -- pulled in via require()
export const addToCartPilet: SinglePilet = {
	name: 'addToCartPilet',
	version: '0.0.1',
	spec: 'v2',
	dependencies: {},
	config: {},
	basePath: '',
	link: 'fakelink',
	setup(api) {

        api.setData('cart', []);

        const addToCart = (item) => (e) => {
          e.preventDefault()
          var cart = api.getData('cart');
          cart.push(item)
          api.setData('cart', cart);
        }
		
		api.registerExtension('add-to-cart-button', ({piral, params }) => {
			return <AddToCartButton piral={piral} addToCart={addToCart} {...params} />
		});
	},
};