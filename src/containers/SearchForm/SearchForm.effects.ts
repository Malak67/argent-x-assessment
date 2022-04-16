import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';

export interface IFormData {
  address: string;
}

export const useSearchFormEffects = () => {
  const [walletAddress, setWalletAddress] = useState<string>();
  const defaultValues: IFormData = {
    address: '',
  };

  const validationSchema = yup
    .object({
      address: yup
        .string()
        .required('Must be a valid Wallet Address')
        .matches(/^0x[a-fA-F0-9]{40}$/g, 'Must be a valid Wallet Address')
        .label('Wallet Address'),
    })
    .required();

  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: IFormData) => {
    if (!data?.address) {
      setError('address', {
        type: 'manual',
        message: 'Wallet Address is required',
      });
      return;
    }
    setWalletAddress(data.address);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    walletAddress,
  };
};
