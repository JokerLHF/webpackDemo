
import './header.scss';
function Header () {
  let header = document.createElement('div'), root = document.getElementById('root');
  header.classList.add('header-div');
  header.innerHTML = '211';
  root.appendChild(header);
}
function A () {

}
export { Header, A };