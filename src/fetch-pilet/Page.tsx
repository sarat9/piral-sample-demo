import { ExtensionSlot } from 'piral-core';
import * as React from 'react';

export default ({ piral }) => {

  const [storeData, setStoreData] = React.useState(null)
	React.useEffect(()=>{
		fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setStoreData([...json]))
	},[])

  return (
    <>
      <h1>Fetching Data from Random API</h1>

      {storeData&&storeData.map(val=>{
        return <div style={{boxShadow:"grey 1px 1px 1px 1px", margin: "10px", padding:"10px"}}>
          <h3>{val.title}</h3>
          <img src={val.image} style={{width:"200px", height: "200px"}}></img>
          <ExtensionSlot name="add-to-cart-button" params={{item:val}}/>
        </div>
      })}

    </>
  );
};
