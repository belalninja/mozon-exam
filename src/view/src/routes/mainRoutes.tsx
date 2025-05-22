import { createBrowserRouter } from 'react-router';
import GeneralLayout from '../layout';
import ListCustomerPage from '../pages/ListCustomer/ListCustomerPage';
import CreateCustomerPage from '../pages/CreateCustomer/CreateCustomerPage';

const router = createBrowserRouter([
  {
    Component: GeneralLayout,
    children: [
      {
        index: true,
        Component: ListCustomerPage,
      },
      {
        path: '/customers/new',
        Component: CreateCustomerPage,
      },
    ],
  },
]);

export default router;
