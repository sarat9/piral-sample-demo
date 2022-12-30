import 'piral/polyfills'
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi, createMenuApi } from 'piral';
import { layout, errors } from './layout';
import {demoPilet} from './local-pilet/demo-pilet'
import {secondPilet} from './local-second-pilet/second-pilet'
import { fetchPilet } from './fetch-pilet/fetch-pilet';
import { addToCartPilet } from './utils/add-to-cart-pilet';
import { checkOutPilet } from './checkout-pilet/checkout-pilet';

// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample'
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';


const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [...createStandardApi()],
  availablePilets: [demoPilet, secondPilet, fetchPilet, addToCartPilet, checkOutPilet],
  // availablePilets: [demoPilet],
  // requestPilets() {
  //   return fetch(feedUrl,{
  //     mode: 'no-cors'
  //   })
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((res) => {
  //       return res.items
  //     });
  // },
});

instance.root.setData("mobileNo", "9090909090");

instance.root.registerExtension("setAnotherValue", () => (
  <button onClick={() => instance.root.setData("dynamicValue", 42)}>
    Set value of dynamicValue
  </button>
));

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
