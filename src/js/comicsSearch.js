import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { refs } from './refs';

const options = {
  closeOnEscape: true,
  dateFormat: 'd/m/Y',
  maxDate: 'today',
};

flatpickr(refs.startYear, options);
