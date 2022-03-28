import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/routes';


export const NotFoundPage = () => {
  return (
    <>
      <div>NotFoundPage</div>
      <Link to={ROUTES.MAIN_PAGE}>Return to main page</Link>
    </>
  );
};
