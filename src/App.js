import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import Userlist from './Components/Userlist';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserEdit from './Components/UserEdit';
import UserCreate from './Components/User-Create';
import UserDelete from './Components/UserDelete';
import Productlist from './Components/Productlist';
import Createproduct from './Components/Createproduct';




function App() {

  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
           <Topbar />
         
         
            <div class="container-fluid">
             <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/users" element={<Userlist />}></Route>
            <Route path="/user-create" element={<UserCreate />}></Route>
            <Route path="/user-edit/:id" element={<UserEdit />}></Route>
            <Route path="/user-delete/:id" element={<UserDelete />}></Route>
            <Route path="/product" element={<Productlist />}></Route>
            <Route path="/product-create" element={<Createproduct />}></Route>
           
          
            
              </Routes>
              
              </div>
      </div>
      </div>
    </div>
    </BrowserRouter> 
  );


}

export default App;
