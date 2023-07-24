import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Outlate/Home/Home.jsx'
import Main from './Component/Outlate/Main/Main.jsx'
import Login from './Component/AuthencationAll/Login/Login.jsx'
import Registration from './Component/AuthencationAll/Registration/Registration.jsx'
import AuthProvider from './Component/AuthencationAll/AuthProvider/AuthProvider.jsx'
import AllCollage from './Component/AllCollage/AllCollage'




let route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path:"allCollage",
        element:<AllCollage></AllCollage>
      }
    ]
  },
  {
    path: "*",
    element: <>400000000000000000444444444444444444444444444</>
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <RouterProvider router={route}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
