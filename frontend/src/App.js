import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { NotFound, Home } from './pages';
import { Layout } from './components';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME_PAGE} element={<Home />} />
          <Route path={ROUTES.NOT_FOUND} exact={true} element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
