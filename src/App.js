
import React,{useState,useEffect} from "react";
import Login from "./components/Login";
//import { createRoot } from 'react-dom/client';
//import * as ReactDOM from 'react-dom/client';

function App(){
    const [user,setUser] = useState('');
    if (!user){
        return <Login setUser = {setUser}/>;

    }
    return <div>app</div>;
}




export default App;