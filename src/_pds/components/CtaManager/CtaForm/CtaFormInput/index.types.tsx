import { UseFormRegisterReturn } from 'react-hook-form';

export interface CtaFormInputProps {
  label: string;
  placeholder: string;
  errText: string;
  isError: boolean;
  register: UseFormRegisterReturn;
}
