import ReactDom from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Views/Home/home'
import "./index.css";
import SignUp from './Views/Signup/Sign';
import Login from './Views/Login/Login';
import Buy from './Views/Buy/Buy';
import MyOrders from './Views/Myorders/MyOrders';


 

const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  
    {
        "path": "/signup",
        "element": <SignUp/>
    },
    {
        "path": "/login",
        "element": <Login/>
    },
    {
        "path": "/buy/:id",
        "element": <Buy/>
    },
    {
        "path":"/my-orders",
        "element" : <MyOrders/>
    },
    {
        "path":"/",
        "element" : <Home/>
    }
])

root.render(
    <RouterProvider router={router}/>
)
