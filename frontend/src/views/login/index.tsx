import React from 'react';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Input } from 'components/input';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, ButtonVariants } from 'components/button';
import { Routes } from 'router/routes';
import { Link } from 'react-router-dom';
import { useLoginUser } from 'api/graphql/hooks/auth/useLoginUser';
import { useUser } from 'providers/user';
import { LS_AUTH_TOKEN } from 'constants/auth';

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

const SButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`;

const SLoginButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.small};
    margin: 0;
`;

const SLink = styled(Link)`
    display: grid;
    place-items: center;
    transform: translateY(-1px);
    text-decoration: none;
`;

type LoginFormValues = {
    username: string;
    password: string;
};

export const LoginView = () => {
    const { register, getValues, handleSubmit } = useForm();
    const { loginUser } = useLoginUser();
    const { setUser } = useUser();

    const onSubmit = async (values: LoginFormValues) => {
        try {
            const { data } = await loginUser(values);
            const { access_token, user } = data.login;

            localStorage.setItem(LS_AUTH_TOKEN, access_token);
            setUser(user);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    register={register}
                    getValues={getValues}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    register={register}
                    getValues={getValues}
                />
                <SButtonsWrapper>
                    <Button>Login</Button>
                    <SLoginButtonWrapper>
                        <SParagraph>Don't have an account?</SParagraph>
                        <SLink to={Routes.Register}>
                            <Button type="button" variant={ButtonVariants.Secondary}>
                                Just register
                            </Button>
                        </SLink>
                    </SLoginButtonWrapper>
                </SButtonsWrapper>
            </SForm>
        </SWrapper>
    );
};
