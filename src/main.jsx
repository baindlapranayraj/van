import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'

// Pages
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Van from './components/Van.jsx'
import VanDet from './components/VanDet.jsx'
import Host from './components/Host.jsx'
import HostLayout from './HostLayout.jsx'
import Hostvan from './components/Hostvan.jsx'
import Review from './components/Review.jsx'
import HvanLayout from './components/HvanLayout.jsx'
import HvanDetail from './components/HvanDetail.jsx'
import HvanPrice from './components/HvanPrice.jsx'
import HvanPhotos from './components/HvanPhotos.jsx'
import Errror from './components/Errror.jsx'
import LoginAuth from './LoginAuth.jsx'

// Mirage JS
import "./server.js"




const route = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/van',
        element:<Van/>
      },
      {
        path:'/van/:id',
        element:<VanDet/>
      },
      {
        path:'/host',
        element:<HostLayout/>,
        children:[
          {
            path:"/host",
            element:<Host/>
          },
          {
            path:'/host/review',
            element:<Review/>
          },
          {
            path:'/host/vans',
            element:<Hostvan/>,
          },
          {
            path:'/host/van/:id',
            element:<HvanLayout/>,
            children:[
              {
                path:'/host/van/:id',
                element:<HvanDetail/>
              },
              {
                path:'/host/van/:id/price',
                element:<HvanPrice/>
              },
              {
                path:'/host/van/:id/photos',
                element:<HvanPhotos/>
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path:"/login",
    element:<LoginAuth/>
  },
  {
    path:"*",
    element:<Errror/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
     <RouterProvider router={route}/>
    </AuthContextProvider>
  </React.StrictMode>,
)
