import React from 'react'
import Accueil from './Chaines/Accueil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Videos from './Chaines/Videos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/videos/:id",
    element: <Videos />,
  },
]);

const App = () => {
  return (
    <div className='container1 text-light'>
      <RouterProvider router={router}>
       <Accueil/>
      </RouterProvider>
    </div>
  )
}

export default App
