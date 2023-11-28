import Sobre from 'pages/Sobre';
import Habilidades from 'pages/Habilidades';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Menu2 from 'components/Menu/menu2';
import SimpleGrow from 'components/Contato';
import { useRecoilState } from 'recoil';
import { darkModeState } from 'atom';
import Projects from './pages/Projects/index';

export default function AppRouter() {

  const [toggleDarkMode, setToggleDarkMode] = useRecoilState(darkModeState);

  

  return (

    <main className='container'>
      <Menu2 />
      <SimpleGrow toggleDarkMode={toggleDarkMode} />
      <Router>
        <Suspense fallback={<p>Carregando</p>} >
          <Routes>
            <Route path='' element={<Sobre />} />
            <Route path='About%20me' element={<Sobre />} />
            <Route path='Projects' element={<Projects />} />
            <Route path='Skills' element={<Habilidades />} />
          </Routes>

        </Suspense>
      </Router>

    </main >
  );
}
