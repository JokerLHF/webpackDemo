
import JPG from '../static/loading.jpg';

function createImg () {
  let imgNode = new Image();
  imgNode.src = JPG;
  imgNode.classList.add('loading-image');
  let root = document.getElementById('root');
  root.append(imgNode);
}
export default createImg;
