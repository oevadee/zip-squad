import React from 'react';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Input } from 'components/input';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from 'components/button';

const SWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SLogoWrapper = styled.div`
    margin-bottom: 48px;
`;

const SForm = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const LoginView = () => {
    const { register, getValues, handleSubmit } = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="username"
                    placeholder="Enter username"
                    register={register}
                    getValues={getValues}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    register={register}
                    getValues={getValues}
                />
                <Button>Login</Button>
            </SForm>
        </SWrapper>
    );
};
