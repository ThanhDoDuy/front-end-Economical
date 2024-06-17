import { useState } from 'react';
import Router from './routers/Router';
import publicRoutes from './routers/routes/publicRoute';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  console.log(allRoutes);
  return <Router allRoutes={allRoutes} />;
}

export default App;
