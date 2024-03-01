import { Link } from 'react-router-dom';

import './HeaderAndFooter.css';
let logo = require("../../../assets/logo.png");

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="" /></Link>
      <nav>
        <ul>
          <li><Link to='/'>Все слова</Link></li>
          <li><Link to='/game'>Изучать слова</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;