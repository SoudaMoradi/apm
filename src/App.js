import './App.css';
import Login from "./Login";
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import Sidebar from "./Sidebar";
import RoadManagement from "./pages/RoadManagement";
import {useState} from "react";
import Conversation from "./pages/Conversation";
import Letters from "./pages/Letters";




function App() {
    const [user, setUser] = useState();
    return (

        <div className="h-screen w-screen">
            {
                user ? (
                    <div className="flex h-full w-full ">
                        <Sidebar/>
                        <div className="h-full w-full">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/roadmanagement" element={<RoadManagement/>}/>
                                <Route path="/roadmanagement/:id/:tab" element={<RoadManagement/>}/>
                                <Route path="/conversation/:id/:tab" element={<Conversation/>}/>
                                <Route path="/conversation" element={<Conversation/>}/>
                                <Route path="/letters" element={<Letters/>}/>
                                <Route path="/letters/:id/:tab" element={<Letters/>}/>
                            </Routes>
                        </div>
                    </div>

                ) : (
                    <Login setUser={setUser}/>
                )
            }

        </div>


    );
}

export default App;
