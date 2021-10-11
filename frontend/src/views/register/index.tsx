import React from 'react';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Input } from 'components/input';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, ButtonVariants } from 'components/button';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';
import { useCreateUser } from 'api/graphql/hooks/useCreateUser';
import { LS_AUTH_TOKEN } from 'constants/auth';
import { useUser } from 'providers/user';

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
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const SNameInputsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const SButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SLoginButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.gray};
    margin: 0;
`;

const SLink = styled(Link)`
    display: grid;
    place-items: center;
    transform: translateY(-1px);
    text-decoration: none;
`;

export const RegisterView = () => {
    const { register, getValues, handleSubmit } = useForm();
    const { createUser, state } = useCreateUser();
    const { user, setUser } = useUser();

    const onSubmit = async (values: any) => {
        try {
            const { data } = await createUser(values);
            const { token, user } = data.register;

            localStorage.setItem(LS_AUTH_TOKEN, token);
            setUser(user);
        } catch (err) {
            console.error(err);
        }
    };

    console.log(user);

    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                <SNameInputsWrapper>
                    <Input
                        label="First name"
                        name="firstName"
                        placeholder="Enter your first name"
                        register={register}
                        getValues={getValues}
                    />
                    <Input
                        label="Last name"
                        name="lastName"
                        placeholder="Enter your last name"
                        register={register}
                        getValues={getValues}
                    />
                </SNameInputsWrapper>
                <Input
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    register={register}
                    getValues={getValues}
                />
                <Input
                    label="Hasło"
                    name="password"
                    placeholder="Enter password"
                    register={register}
                    getValues={getValues}
                />
                <SButtonsWrapper>
                    <SLoginButtonWrapper>
                        <SParagraph>Already have an account?</SParagraph>
                        <SLink to={Routes.Login}>
                            <Button variant={ButtonVariants.Secondary}>Just login</Button>
                        </SLink>
                    </SLoginButtonWrapper>
                    <Button>Register</Button>
                </SButtonsWrapper>
            </SForm>
        </SWrapper>
    );
};
