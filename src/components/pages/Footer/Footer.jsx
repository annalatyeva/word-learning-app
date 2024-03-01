import { Link } from 'react-router-dom';

import '../Header/HeaderAndFooter.css';
let logo = require("../../../assets/logo.png")

function Footer() {
  return (
    <footer className="footer">
      <Link to="/"><img src={logo} alt="" /></Link>
      <div className="footer-nav">
        <ul>
          <li><Link to='/'>Все слова</Link></li>
          <li><Link to='/game'>Изучать слова</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;