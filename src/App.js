import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import IssueBook from './components/IssueBook'
import ViewIssueBook from './components/ViewIssueBook'
import ReturnedBook from './components/ReturnedBook'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/about" element = {<About/>}/>
    <Route path = "/service" element = {<Services/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/register" element = {<Register/>}/>
    <Route path = "/addbook" element = {<AddBook/>}/>
    <Route path = "/viewbook" element = {<ViewBook/>}/>
    <Route path = "/issuebook" element = {<IssueBook/>}/>
    <Route path = "/viewissuebook" element = {<ViewIssueBook/>}/>
    <Route path = "/returnedbook" element = {<ReturnedBook/>}/>
   </Routes>
   {/* <Home/>   
   <About/>
   <Services/> */}
   {/* <Footer/> */}
   </>
  );
}

export default App;
