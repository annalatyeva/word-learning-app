import { Link } from "react-router-dom";
import './MissingPage.css';

let missingPageImage = require("../../../assets/missing-page.jpg");

function MissingPage() {
    return (
        <div className="missing-page">
            <img src={missingPageImage} alt="" />
            <div>Ой... Мы не можем найти эту страницу!</div>
            <div>Но это не причина быстро покидать сайт.</div>
            <div>Вы можете перейти на </div>
            <Link to='/'>главную страницу</Link>
        </div>
    );
}

export default MissingPage;