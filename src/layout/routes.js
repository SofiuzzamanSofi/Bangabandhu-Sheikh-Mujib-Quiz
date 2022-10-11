import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Statistics from "../component/Statistics/Statistics";
import Main from "./Main";




const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            // { path: '/', element: <About /> },
            { path: 'statistics', element: <Statistics /> }
        ]
    }
])

export default router;