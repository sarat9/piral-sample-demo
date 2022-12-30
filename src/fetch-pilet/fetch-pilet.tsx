import * as React from 'react';
import type { SinglePilet } from 'piral-base';
import Page from './Page'
import { Link } from 'react-router-dom';


// allow-unused-export -- pulled in via require()
export const fetchPilet: SinglePilet = {
	name: 'fetchpilet',
	version: '0.0.1',
	spec: 'v2',
	dependencies: {},
	config: {},
	basePath: '',
	link: 'fakelink',
	setup(api) {
		
		api.registerPage("/fetch", Page);
		api.registerMenu(()=> <Link to="/fetch">Fetch</Link>);
	},
};