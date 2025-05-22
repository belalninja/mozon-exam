import { createBrowserRouter } from 'react-router';
import GeneralLayout from '../layout';
import ListCustomerPage from '../pages/ListCustomerPage';

const router = createBrowserRouter([
  {
    Component: GeneralLayout,
    children: [
      {
        index: true,
        Component: ListCustomerPage,
      },
      {
        path: '/customers',
        element: <div>Hello</div>,
      },
    ],
  },
]);

export default router;
