
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useParams,
} from "react-router-dom";
import Blog from './Component/Blog/Blog';
import Statistics from './Component/Statistics/Statistics';
import About from './Component/About/About';
import Main from './Component/Main/Main';
import QuizDeatils from './Component/QuizDeatils/QuizDeatils';
import Home from './Component/Home/Home';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'Statistics',
          loader:async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDeatils></QuizDeatils>
        },
      ]
    },
  
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
