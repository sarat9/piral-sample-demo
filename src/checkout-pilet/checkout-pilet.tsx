import * as React from 'react';
import type { SinglePilet } from 'piral-base';
import CheckoutPage from './CheckoutPage'
import { Link } from 'react-router-dom';


// allow-unused-export -- pulled in via require()
export const checkOutPilet: SinglePilet = {
	name: 'checkoutPilet',
	version: '0.0.1',
	spec: 'v2',
	dependencies: {},
	config: {},
	basePath: '',
	link: 'fakelink',
	setup(api) {
		
		api.registerPage("/checkout", CheckoutPage);
		api.registerMenu(()=> <Link to="/checkout">Checkout</Link>);

	},
};