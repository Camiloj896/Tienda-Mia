import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import Header from './../components/Header/Index';
import Orders from './Orders/Index';
import Reports from './Reports/Index';
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Orders />} />
        <Route path='report/:type' element={<Reports />} />
      </Route>
    )
  );

const App = () => {
    return (
        <>
            <Header />
            <section className='wrapper-page'>
                <div className='container-page'>
                    <RouterProvider router={router} />
                </div>
            </section>
        </>
    );
};

export default App;