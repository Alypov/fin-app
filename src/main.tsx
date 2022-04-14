import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import { LoginPage, MainPage, RegistrationPage, NotFoundPage } from './pages';
import { ROUTES } from './shared/routes/routes';
import './styles.scss';
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route  path={ROUTES.MAIN_PAGE}element={<MainPage/>} />
      <Route  path={ROUTES.LOGIN} element={<LoginPage/>} />
      <Route  path={ROUTES.REGISTRATION} element={<RegistrationPage/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
