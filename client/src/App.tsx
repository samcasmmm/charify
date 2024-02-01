import './App.css';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import routes from '@/routes/';
import Desktop from '@/layout/Desktop';

function App() {
  return (
    <>
      <Toaster position='top-right' reverseOrder={true} />
      <Routes>
        <Route element={<Desktop />}>
          {routes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense fallback={<p>Loading..</p>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
