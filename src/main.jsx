import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Nawintrade from './components/Nawintrade.jsx';
import Caraball from './components/Caraball.jsx';
import Califonia from './components/Califonia.jsx';
import ProjectPage from './components/ProjectPage.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />,},
  {path: "/project", element: <ProjectPage />,},
  {path: "/project/nawintrade", element: <Nawintrade />},
  {path: "/project/Caraball", element: <Caraball />},
  {path: "/project/Califonia", element: <Califonia />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
