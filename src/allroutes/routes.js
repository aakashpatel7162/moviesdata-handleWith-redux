import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { paths } from './paths';
import Home from '../pages/Home';
import Form from '../pages/Form';


const allRoutes = createRoutesFromElements(
  <>
    <Route  path={paths.root } element={<Home />} />
    <Route  path={paths.home} element={<Home />} />
    <Route path={paths.update} element={<Form />} />
    <Route path={paths.add} element={<Form />} />

  </>
);

const routes = createBrowserRouter(allRoutes);

export default routes;
