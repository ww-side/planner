import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import TaskList from './pages/TaskList/index.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import Board from './pages/Board/index.tsx';
import Timer from './pages/Timer/index.tsx';
import Screen from './components/common/Screen/index.tsx';

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
