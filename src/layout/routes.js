import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Blog from "../component/Blog/Blog";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Questions from "../component/Questins/Questions";
import Root from "../component/Root/Root";
import Statistics from "../component/Statistics/Statistics";
import Topic from "../component/Topic/Topic";
import { allTypeApi, questionsLoaders } from "../Loaders/AllTypeApi";




const router = createBrowserRouter([
    {
        path: '/', element: <Root />, errorElement: <ErrorPage />, loader: allTypeApi, children: [
            { path: '/', element: <About /> },
            // { path: '/', element: <Topic /> },
            { path: 'topic', element: <Topic /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'statistics', element: <Statistics /> },
            { path: 'blog', element: <Blog /> },
            { path: 'question/:id', element: <Questions />, loader: questionsLoaders }
        ]
    }
])

export default router;