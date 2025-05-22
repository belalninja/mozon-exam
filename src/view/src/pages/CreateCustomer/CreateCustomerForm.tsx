import { useState } from 'react';
import InputField from '../../shared/components/InputField/InputField';
import DropdownField from '../../shared/components/InputField/DropdownField';
import PhoneField from '../../shared/components/InputField/PhoneField';
import FileDropField from '../../shared/components/InputField/FileDropField';
import Button from '../../shared/components/ButtonComponent/Button';
import styles from './CreateCustomerPage.module.scss';
import { apiHost } from '../../shared/apiHost';

const countryOptions = [
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
  { value: 'UAE', label: 'UAE' },
  { value: 'Kuwait', label: 'Kuwait' },
  { value: 'Qatar', label: 'Qatar' },
  { value: 'Bahrain', label: 'Bahrain' },
  { value: 'Oman', label: 'Oman' },
];

function CreateCustomerForm() {
  const [form, setForm] = useState({
    name: '',
    companyName: '',
    country: null,
    taxID: '',
    registrationID: '',
    phoneNumber: '',
    file: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCountryChange(option) {
    setForm({ ...form, country: option });
  }

  function handlePhoneChange(value) {
    setForm({ ...form, phoneNumber: value });
  }

  function handleFileDrop(files) {
    setForm({ ...form, file: files[0] });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const payload = {
        ...form,
        country: form.country?.value || '',
        file: undefined,
      };
      console.log(payload);

      // File upload is not supported by API, so we ignore file
      await fetch(`${apiHost}/customer/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      // Optionally: redirect or reset form
    } catch {
      setError('Failed to create customer');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        label='Name'
        name='name'
        value={form.name}
        onChange={handleChange}
        required
      />
      <InputField
        label='Company Name'
        name='companyName'
        value={form.companyName}
        onChange={handleChange}
        required
      />
      <DropdownField
        label='Country'
        value={form.country}
        onChange={handleCountryChange}
        options={countryOptions}
        placeholder='Select country'
        required
      />
      <InputField
        label='Tax ID'
        name='taxID'
        value={form.taxID}
        onChange={handleChange}
        required
      />
      <InputField
        label='Registration ID'
        name='registrationID'
        value={form.registrationID}
        onChange={handleChange}
        required
      />
      <PhoneField
        label='Phone Number'
        value={form.phoneNumber}
        onChange={handlePhoneChange}
        required
      />
      <FileDropField
        label='Attach File'
        onDrop={handleFileDrop}
        accept={'.pdf,.jpg,.png,.jpeg'}
        multiple={false}
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button type='submit' disabled={submitting}>
        {submitting ? 'Submitting...' : 'Create Customer'}
      </Button>
    </form>
  );
}

export default CreateCustomerForm;
