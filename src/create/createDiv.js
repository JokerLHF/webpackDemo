
function createDiv () {
  let div = document.createElement('div'), root = document.getElementById('root');
  div.setAttribute('id', 'div-test');
  div.innerHTML = 5000;
  root.appendChild(div);
}

if (module.hot) {
  module.hot.accept();
}

export default createDiv;