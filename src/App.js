import logo from './logo.svg';
import './App.css';
 import { Navbar } from './components/Nvbar/Navbar'; 
import { Footer } from './components/Footer/Footer';
import Box from "@mui/material/Box";
import {
  useState
} from 'react'


function App() {
  return (
    <div className="App">
      <Navbar />
      < body style = {
        {
          height: "90vh"
        }
      } > </body>
      <Footer />
    </div>
  );
}

export default App;

