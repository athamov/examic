import * as React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Loader from './components/Loader'
const Home = React.lazy(() => import('./components/Home'));
const Create = React.lazy(() => import('./components/Create'));
const Event = React.lazy(() => import('./components/Event'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function App() {
return (
  <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>} />
          <Route path='/create' element={
            <React.Suspense fallback={<Loader />}>
              <Create />
            </React.Suspense>} />
          <Route path='/event' element={
            <React.Suspense fallback={<Loader />}>
              <Event />
            </React.Suspense> 
            } />
          <Route path='*' element={
            <React.Suspense fallback={<Loader />}>
              <NotFound />
            </React.Suspense> 
            } />
      </Routes>
    </BrowserRouter>
  </>
);
}
export default App;