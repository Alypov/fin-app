import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, MainPage, RegistrationPage, NotFoundPage } from './pages';
import { ROUTES } from './shared/routes/routes';
import './styles.scss';
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.MAIN_PAGE} replace />}/>
      <Route  path={ROUTES.MAIN_PAGE}element={<MainPage/>} />
      <Route  path={ROUTES.LOGIN} element={<LoginPage/>} />
      <Route  path={ROUTES.REGISTRATION} element={<RegistrationPage/>} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
