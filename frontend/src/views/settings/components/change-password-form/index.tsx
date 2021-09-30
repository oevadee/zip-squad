import { Button } from 'components/button';
import { Input } from 'components/input';
import React from 'react';
import { useForm } from 'react-hook-form';

export const ChangePasswordForm = () => {
    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="password"
                label="Password"
                name="password"
                register={register}
                getValues={getValues}
                placeholder="Change your password"
            />
            <Input
                type="password"
                label="ConfirmPassword"
                name="confirmPassword"
                register={register}
                getValues={getValues}
                placeholder="Confirm your password"
            />
            <Button>Update</Button>
        </form>
    );
};
