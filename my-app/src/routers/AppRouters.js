import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Landing from "../components/LandingComponent/Landing";



export default function AppRouter(){
    return <BrowserRouter>
       <Routes>
         <Route path="/" element={<Landing />} />
         {/* <Route path="post" element={<PostView />} >
            <Route path="new" element={<LandingComponent />}  />
            <Route path="all" element={<LandingComponent />}  />
         </Route> */}
       </Routes>
    </BrowserRouter>
}