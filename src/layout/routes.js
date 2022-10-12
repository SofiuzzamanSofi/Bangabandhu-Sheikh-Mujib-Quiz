import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Blog from "../component/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Statistics from "../component/Statistics/Statistics";
import Topic from "../component/Topic/Topic";
import Main from "./Main";




const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
            { path: '/', element: <About /> },
            { path: '/', element: <Topic /> },
            { path: 'topic', element: <Topic /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'blog', element: <Blog /> }
        ]
    }
])

export default router;