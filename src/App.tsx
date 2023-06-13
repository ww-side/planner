import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import TaskList from './pages/TaskList/TaskList.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Board from './pages/Board/Board.tsx';
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
