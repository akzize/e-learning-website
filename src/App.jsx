


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './Chaines/Accueil';
import Videos from './Chaines/Videos';
import Login from './Chaines/Login';

const App=()=>{

const router = createBrowserRouter([
  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/videos/:id",
    element: <Videos />,
  },
  {
    path: "/",
    element: <Login />
  }

]);


return (
  <div className='App text-light'>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
)
}

export default App
