import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { SingleValue } from 'react-select';
import type { Value } from 'react-phone-number-input';
import InputField from '../../shared/components/InputField/InputField';
import DropdownField from '../../shared/components/InputField/DropdownField';
import PhoneField from '../../shared/components/InputField/PhoneField';
import FileDropField from '../../shared/components/InputField/FileDropField';
import Button from '../../shared/components/ButtonComponent/Button';
import styles from './CreateCustomerPage.module.scss';
import { apiHost } from '../../shared/apiHost';
import { Link, useNavigate } from 'react-router';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import countryOptions from '../../shared/utils/getCountriesNamesList';

type FormValue = {
  name: string;
  companyName: string;
  country: null | { value: string; label: string };
  taxID: string;
  registrationID: string;
  phoneNumber: string;
  file: File | null;
};

function CreateCustomerForm() {
  const [form, setForm] = useState<FormValue>({
    name: '',
    companyName: '',
    country: null,
    taxID: '',
    registrationID: '',
    phoneNumber: '',
    file: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCountryChange(
    option: SingleValue<{ value: string; label: string }>
  ) {
    setForm({ ...form, country: option });
  }

  function handlePhoneChange(value: Value) {
    if (
      typeof value === 'string' &&
      value.length > 9 &&
      !isPossiblePhoneNumber(value)
    ) {
      setError('Invalid phone number');
      return;
    }
    setError('');
    setForm({ ...form, phoneNumber: typeof value === 'string' ? value : '' });
  }

  function handleFileDrop(files: File[]) {
    setForm({ ...form, file: files[0] });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      navigate('/');
    } catch {
      setError('Failed to create customer');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <div className={styles.fieldsWrapper}>
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
          />
          {error && <div className={styles.error}>{error}</div>}
        </div>
        <div className={styles.fileInputWrapper}>
          <FileDropField
            label='Registry documents'
            onDrop={handleFileDrop}
            multiple={false}
          />
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <Link to={'/'}>
          <Button type='button' variant='secondary'>
            Cancel
          </Button>
        </Link>
        <Button type='submit' disabled={submitting}>
          {submitting ? 'Submitting...' : 'Create Customer'}
        </Button>
      </div>
    </form>
  );
}

export default CreateCustomerForm;
