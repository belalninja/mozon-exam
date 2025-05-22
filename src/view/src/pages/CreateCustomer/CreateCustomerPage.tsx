import TopOfPage from '../../shared/components/TopOfPage/TopOfPage';
import CreateCustomerForm from './CreateCustomerForm';

export default function CreateCustomerPage() {
  return (
    <main>
      <TopOfPage title='New Customer' showAddButton={false} />

      <CreateCustomerForm />
    </main>
  );
}
