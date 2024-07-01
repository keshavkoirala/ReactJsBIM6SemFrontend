import logo from './logo.svg';
import './App.css';
import Button from './Button';
import DemoComponent from './DemoComponent';
import UserRegistrationForm from './User/UserRegistrationForm';
import Login from './User/Login';
import UserList from './User/UserList';
import Navigation from './User/Navigation';
import { useState } from 'react';
import HomePage from './User/HomePage';
import ParentComponent from './PassingProps/ParentComponent';
import StateManupulation from './PassingProps/StateManupulation';
import UseEffectExample from './UseEffectExample';
import MainComponent from './ReactContextExample/MainComponent';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './User/Category/CategoryForm';
import CategoryList from './User/Category/CategoryList';
import Parent from './ToDO/Parent';
import UseNavigateHooksExample from './ReactRouterHooks/UseNavigateHooksExample';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index path='/userregistration' element={<UserRegistrationForm />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category' element={<CategoryList />} />
          
          <Route path='/navigateExample' element={<UseNavigateHooksExample />} />

          <Route path='*' element={<>URL Not Found</>} />
          
        </Routes>
    </BrowserRouter>

     {/* <Navigation tab={tab} setTab={setTab} />
     {
      elemet
     } */}

     {/* <ParentComponent /> */}
     {/* <StateManupulation /> */}

     {/* <UseEffectExample /> */}
     {/* <MainComponent /> */}
     {/* <Parent /> */}
    </>
  
  );
}

export default App;
