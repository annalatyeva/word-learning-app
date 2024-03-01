import './App.css';
import './components/variables.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from './components/pages/Footer/Footer.jsx';
import Header from './components/pages/Header/Header.jsx';
import WordList from './components/mainPage/WordList/WordList.jsx';
import WordCardConteiner from './components/wordCard/WordCardConteiner/WordCardConteiner.jsx';
import MissingPage from './components/pages/MissingPage/MissingPage.jsx';

import { Words } from './components/Words.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      {Words && Words.length > 0
      ?
      <main>
        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/game" element={<WordCardConteiner />} />
          <Route path='*' element={<MissingPage />}></Route>
        </Routes>
      </main>
      :<main className='errorWordlist'>
        <div>К сожалению, мы не смогли получить список слов</div>
        <div>Попробуйте обновить страницу</div>
        <div>Или напишите нам на почту:</div>
        <div>lalala@mail.ru</div>
      </main>
      }
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
