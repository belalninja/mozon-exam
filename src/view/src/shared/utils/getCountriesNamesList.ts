import { getCountries } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';

const countryOptions = getCountries().map((country) => {
  return { value: en[country], label: en[country] };
});

// const countryOptions = [
//   { value: 'Saudi Arabia', label: 'Saudi Arabia' },
//   { value: 'UAE', label: 'UAE' },
//   { value: 'Kuwait', label: 'Kuwait' },
//   { value: 'Qatar', label: 'Qatar' },
//   { value: 'Bahrain', label: 'Bahrain' },
//   { value: 'Oman', label: 'Oman' },
// ];

export default countryOptions;
