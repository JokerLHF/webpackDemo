import './button.css';
import createDiv from './createDiv';
function createBtn () {
  let btn = document.createElement('button'), root = document.getElementById('root');
  btn.innerHTML = "点击";
  btn.onclick = function () {
    var p = document.createElement('p');
    p.innerHTML = 'item';
    root.appendChild(p);
  }
  root.appendChild(btn);
  createDiv();
}

export default createBtn;