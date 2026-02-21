//React
import React from "react";
import { useState } from "react";

// Style
import './App.css';
import './assets/styles/animates.css';
import './assets/styles/tags.css';

//PDF JS
import PDF from "jspdf";
import jsPDF from "jspdf";

//Components
import Header from "./layout/Header/header";
import Main from "./layout/Main/main";

//Animate
import 'animate.css';

//UI
import 'bootstrap/dist/css/bootstrap.min.css';


// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Footer
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
