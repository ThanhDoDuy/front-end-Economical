import { useEffect, useState } from 'react';
import Router from './routers/Router';
import publicRoutes from './routers/routes/publicRoute';
import { getRoutes } from './routers/routes';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes])
    console.log(routes)
  }, []) // Empty dependency array means this effect runs only once
  return <Router allRoutes={allRoutes} />;
}

export default App;
