// import _ from 'lodash';
// console.log(_.join([1, 2, 3], '***'));

function Lodash () {
  return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join([1, 2, 3], '**');
    return element;
  })
}

function init () {
  document.addEventListener('click', () => {
    Lodash().then(element => {
      document.body.appendChild(element);
    });
  })
}

export { init };