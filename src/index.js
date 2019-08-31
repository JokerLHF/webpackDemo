// import { Header } from './Header/Header.js';
// import createImg from './create/createImg';
// import createBtn from './create/createBtn';
// import createDiv from './create/createDiv';
// import { init } from './create/lodash';
// import style from './index.css';
// // import "@babel/polyfill";
// import './iconfont.css';



// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./service-worker.js')
//       .then(registartion => {
//         console.log(registartion);
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   })
// }


// init();
// createImg();
// createBtn();
// createDiv();
// new Header();

// console.log(_.join(['a', 'b'], '***'));
// // if (module.hot) {
// //   module.hot.accept('./create/createDiv', () => {
// //     var div = document.getElementById('div-test'), root = document.getElementById('root');
// //     root.removeChild(div);
// //     createDiv();
// //   });
// // }


// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */'./async/createDiv').then(({ handleClick }) => {
//     handleClick();
//   })
// })




import React, { Component } from 'react'
import ReactDom from 'react-dom';
class APP extends Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

ReactDOM.render(<APP />, document.getElementById('root'));
