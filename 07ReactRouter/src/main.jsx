import './index.css'; // ✅ required to apply Tailwind styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { createBrowserRouter, RouterProvider ,createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout'; 
import Home from './components/home/Home'; 
import About from './components/about/About'; 
import Contact from './components/contact/Contact'; 
import User from './user/User';
import Github from './components/github/Github.jsx';
import  { githubInfoLoader } from './components/github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>
);

