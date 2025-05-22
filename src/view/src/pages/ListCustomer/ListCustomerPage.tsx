import { useState } from 'react';
import type { Customer } from '../../types/prismaTypes';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import CustomerTable from '../../shared/components/CustomerTable/CustomerTable';
import TopOfPage from '../../shared/components/TopOfPage/TopOfPage';
import './ListCustomerPage.module.scss';

function ListCustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 0,
      name: 'Belal',
      country: 'Jordan',
      phoneNumber: '+962 700000000',
      companyName: 'Belal',
      taxID: '123456789',
      regisrationID: '123456789',
    },
    {
      id: 1,
      name: 'Ahmad',
      country: 'Egypt',
      phoneNumber: '+962 70000345345',
      companyName: 'Belal',
      taxID: '123456789',
      regisrationID: '123456789',
    },
  ]);

  return (
    <main>
      <TopOfPage title='Customers' />

      <SearchBar setCustomers={setCustomers} />

      <CustomerTable customers={customers} />
    </main>
  );
}

export default ListCustomerPage;
