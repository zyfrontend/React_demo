import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/routers/index';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default App;
