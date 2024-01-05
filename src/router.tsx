import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import AllNotes from '@pages/AllNotes';
import AllNotesMemoDetail from '@pages/AllNotesMemoDetail';
import Home from '@pages/Home';
import Notebooks from '@pages/Notebooks';
import NotebooksMemoDetail from '@pages/NotebooksMemoDetail';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-notes',
        children: [
          { index: true, element: <AllNotes /> },
          { path: ':id', element: <AllNotesMemoDetail /> },
        ],
      },
      {
        path: '/notebooks',
        children: [
          { index: true, element: <Notebooks /> },
          { path: ':title/memo/:id', element: <NotebooksMemoDetail /> },
        ],
      },
    ],
  },
]);

export default router;
