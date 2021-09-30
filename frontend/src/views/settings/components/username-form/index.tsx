import { Button } from 'components/button';
import { Input } from 'components/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SUsernameForm = styled.form`
    margin-bottom: 48px;
`;

export const ChangeUsernameForm = () => {
    const { register, handleSubmit, getValues } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <SUsernameForm onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Username"
                name="username"
                register={register}
                getValues={getValues}
                placeholder="Change your username"
            />
            <Button>Update</Button>
        </SUsernameForm>
    );
};
