import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import TaskList from './pages/TaskList/TaskList.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Board from './pages/Board/Board.tsx';
import Timer from './pages/Timer/Timer.tsx';
import Screen from './components/commonComponents/Screen/Screen.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tasks',
        element: <TaskList />,
      },
      {
        path: '/board',
        element: <Board />,
      },
      {
        path: '/timer',
        element: <Timer />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
