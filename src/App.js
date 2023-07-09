import { Route, Routes } from "react-router-dom";
import Contests from "./pages/Contests";
import CreatePost from "./pages/CreatePost";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Sheets from "./pages/Sheets";
import SinglePost from "./pages/SinglePost";

function App() {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/sheets" element={<Sheets />} />
                <Route path="/contests" element={<Contests />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post/create" element={<CreatePost />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/posts/:id" element={<SinglePost />} />
            </Routes>
        </div>
    );
}

export default App;
