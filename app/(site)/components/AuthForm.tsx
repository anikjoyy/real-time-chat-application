'use client';

import Input from '@/app/components/input/input';
import { useCallback, useState } from 'react';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';

const AuthForm = () => {
  type Variant = 'LOGIN' | 'REGISTER';
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      // Register
    }
    if (variant === 'LOGIN') {
      // Login
    }
  };
  const socialAction = () => {
    setIsLoading(true);
  };
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      {' '}
      <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <Input />
        </form>
      </div>{' '}
    </div>
  );
};
export default AuthForm;
