import { useEffect, useState } from 'react';
import type { Customer } from '../../types/prismaTypes';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import CustomerTable from '../../shared/components/CustomerTable/CustomerTable';
import TopOfPage from '../../shared/components/TopOfPage/TopOfPage';
import './ListCustomerPage.module.scss';
import { apiHost } from '../../shared/apiHost';

function ListCustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      const customerList = await fetch(`${apiHost}/customers`);
      const data = await customerList.json();
      setCustomers(data);
    }
    fetchCustomers();
  }, []);

  return (
    <main>
      <TopOfPage title='Customers' />

      <SearchBar setCustomers={setCustomers} />

      <CustomerTable customers={customers} />
    </main>
  );
}

export default ListCustomerPage;
