import * as React from 'react';
import type { SinglePilet } from 'piral-base';
import Page from './Page'

const DemoDiv = ({ authToken, children, piral, dynamicValue }) => {
	
    return <div className='local-pilet-div' style={{padding:"20px", background: "lightblue", margin:"10px"}}>
		<h4>LocalPilet</h4>
		<p>This is fetched from piral.getdata --- <b> mobileNo: {piral.getData("mobileNo")}</b></p>
		<p>This is fetched from piral.getdata and then put to state --- <b>dynamicValue: {dynamicValue}</b></p>
		<p>This is passed from props - AuthToken is <b>{authToken}</b>. </p>

        {children}
    </div>
}

// allow-unused-export -- pulled in via require()
export const demoPilet: SinglePilet = {
	name: 'demopilet',
	version: '0.0.1',
	spec: 'v2',
	dependencies: {},
	config: {},
	basePath: '',
	link: 'fakelink',
	setup(api) {

		function usePiralStoreValueHook(name){
			const [value, setValue] = React.useState("")
			React.useEffect(()=>{
				const handler = (ev) => {
					console.log("store-data listen",ev.name)
					if (ev.name === name) {
						setValue(ev.value)
					}
				};
				api.on("store-data", handler);

			},[name])
			
		
			return value
		}

		
		api.registerPage("/localpiletpage", Page);

		api.registerExtension('dashboard-splash', ({piral}) => {
			const dynamicValue = usePiralStoreValueHook("dynamicValue");
			return <DemoDiv authToken="token12345" piral={piral} dynamicValue={dynamicValue}>This came through a pilet extension slot</DemoDiv>
		});
	},
};