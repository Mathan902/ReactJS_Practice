import { Route, Routes } from "react-router-dom";
import Blogs from "./Homepage/Blogs";
import ShortsPage from "./ShortsPage";
import { useSelector } from "react-redux";

const MyRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Blogs/>}></Route>
            <Route path="/shorts" element={<ShortsPage/>}></Route>
        </Routes>
    );
}
export default MyRoutes;

