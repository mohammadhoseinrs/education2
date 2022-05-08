import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Home from "./pages/Home/Home";
import Signup from "./pages/signup/Signup";

let routes=[
    {path:'/',element:<Home />},
    {path:'/signup',element:<Signup />},
    {path:'/coursedetail',element:<CourseDetail />}

]

export default routes