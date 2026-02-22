import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon/icon';
import Nav from './nav/nav';

export default function Header(){
    return(
    <header className="z-1 p-3 position-sticky top-0 bg-secondary-color text-white d-flex align-items-center justify-content-between">
        <Icon />
        <Nav />
  </header>
    )
}
