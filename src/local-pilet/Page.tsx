import * as React from 'react';

export default ({ piral }) => {

  const mobileNo = piral.getData("mobileNo");
  const dynamicValue = piral.getData("dynamicValue");

  return (
    <>
      <h1>Title</h1>
      <p>
       Registered and loading page from local pilet
      </p>
      <p>getting data set while registering parent instance --- <b>mobileNo: {mobileNo}</b></p>
      <p>getting data set while registering parent instance --- <b>dynamicValue: {dynamicValue}</b></p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda adipisci autem et nam quis, corporis
        maxime id? Commodi maiores eligendi similique velit porro consectetur! Voluptates quo autem omnis deserunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis similique veritatis nesciunt non esse commodi
        eligendi fugit officia earum distinctio. Mollitia blanditiis iusto cum pariatur quaerat fuga qui molestias
        delectus?
      </p>
    </>
  );
};
