import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Pantallas */
import FirstScreen from './Screens/FirstScreen';
import LogIn from './Screens/LogIn';
import Home from './Screens/Home';
import RegisterForm from './Screens/RegisterForm';
import FakeCall from './Screens/FakeCall';
import Settings from './Screens/Settings';
import NotFound from './Screens/NotFound';
import PrivacityNotice from './Screens/PrivacityNotice';
import RegisterFormReferenteUno from './Screens/RegisterFormReferenteUno';
import RegisterFormReferenteDos from './Screens/RegisterFormReferenteDos';

/* Ahora no cuenta con una forma de navegar entre pantallas, para ver las diferentes pantallaas puedes cambiar
de pantalla cambiandolo por la pantalla que quieres ver  ( Home , FirstScreen o RegisterForm )*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/fakeCall" element={<FakeCall />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacitynotice" element={<PrivacityNotice />} />
        <Route path="/registerformreferenteuno" element={<RegisterFormReferenteUno />} />
        <Route path="/registerformreferentedos" element={<RegisterFormReferenteDos />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
