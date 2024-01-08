import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import AllNotes from '@pages/AllNotes';
import MemoDetail from '@pages/MemoDetail';
import NotebookDetail from '@pages/NotebookDetail';
import Notebooks from '@pages/Notebooks';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Navigate to="/allnotes" /> },
      {
        path: '/allnotes',
        children: [
          { index: true, element: <AllNotes /> },
          { path: ':id', element: <MemoDetail /> },
        ],
      },
      {
        path: '/notebooks',
        children: [
          { index: true, element: <Notebooks /> },
          { path: ':title', element: <NotebookDetail /> },
          { path: ':title/memo/:id', element: <MemoDetail /> },
        ],
      },
    ],
  },
]);

export default router;
