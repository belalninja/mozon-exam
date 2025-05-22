import TopOfPage from '../../shared/components/TopOfPage/TopOfPage';
import CreateCustomerForm from './CreateCustomerForm';
import styles from './CreateCustomerPage.module.scss';

export default function CreateCustomerPage() {
  return (
    <main className={styles.main}>
      <TopOfPage title='New Customer' showAddButton={false} />

      <CreateCustomerForm />
    </main>
  );
}
