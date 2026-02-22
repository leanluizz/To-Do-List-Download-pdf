import React from "react";
import { useState } from "react";

import './App.css';
import './assets/styles/animates.css';
import './assets/styles/tags.css';

import PDF from "jspdf";
import jsPDF from "jspdf";

import Header from "./layout/Header/header";
import Main from "./layout/Main/main";

import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './layout/Footer/footer';

function App (){


return(
<>
<Header />
<Main />
<Footer/>
</>
)
}
export default App;
