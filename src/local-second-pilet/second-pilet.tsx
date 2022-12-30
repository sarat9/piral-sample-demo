import * as React from 'react';
import type { SinglePilet } from 'piral-base';

const SecondPiletDiv = ({ authToken, children, piral, someParamValue }) => {
	
    return <div className='second-pilet-div' style={{padding:"20px", margin:"10px", background:"deepskyblue"}}>
		<h4>SecondPiletDiv</h4>
		<p>This is fetched from piral.getdata --- <b>mobileNo: {piral.getData("mobileNo")}</b></p>
		<p>This is fetched from params --- <b>someParamValue: {someParamValue}</b></p>
        {children}
    </div>
}

// allow-unused-export -- pulled in via require()
export const secondPilet: SinglePilet = {
	name: 'secondpilet',
	version: '0.0.1',
	spec: 'v2',
	dependencies: {},
	config: {},
	basePath: '',
	link: 'fakelink',
	setup(api) {
		
		api.registerExtension('dashboard-second-pilet', ({piral, params}) => {
			return <SecondPiletDiv piral={piral} {...params}>This came through a pilet extension slot</SecondPiletDiv>
		});
	},
};