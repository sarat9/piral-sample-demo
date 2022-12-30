import * as React from 'react';

export default ({ piral }) => {

  const cart = piral.getData("cart");

  return (
    <>
      <h1>Checkout Page</h1>

      {cart&&cart.map(val=>{
        return <div style={{boxShadow:"grey 1px 1px 1px 1px", margin: "10px", padding:"10px"}}>
          <h3>{val.title}</h3>
          <img src={val.image} style={{width:"200px", height: "200px"}}></img>
        </div>
      })}

    </>
  );
};
