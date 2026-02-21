import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import Icon from './Icon/icon';
// @ts-ignore
import Nav from './Nav/nav';

export default function Header(){
    return(
    <header className="p-3 position-sticky top-0 bg-dark text-white d-flex align-items-center justify-content-between">
        <Icon />
        <Nav />
  </header>
    )
}
