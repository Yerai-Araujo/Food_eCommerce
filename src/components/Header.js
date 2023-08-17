import { Link } from 'react-router-dom';
import FoodLogo from '../images/foodLogo.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={FoodLogo} alt="food eCommerce" />
        <h1>Food eCommerce</h1>
      </Link>
    </header>
  );
}

export default Header;