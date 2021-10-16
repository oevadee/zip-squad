import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { useForm } from 'react-hook-form';
import { UsernameFormProps } from 'views/settings/types';
import { useUpdateUsername } from 'api/graphql/hooks/user/useUpdateUsername';
import { useUser } from 'providers/user';
import { emmitAlert } from 'utils/emmitAlert';

const SUsernameForm = styled.form`
    margin-bottom: 48px;
`;

export const ChangeUsernameForm = () => {
    const { register, handleSubmit, getValues, reset } = useForm();
    const { updateUsername } = useUpdateUsername();
    const { user, setUser } = useUser();

    const onSubmit = async ({ username }: UsernameFormProps) => {
        try {
            if (username.length < 5) throw new Error('Username must be at least 5 characters long');
            if (username.length > 30)
                throw new Error('Username must be at most 30 characters long');

            if (user) {
                await updateUsername({
                    userId: user.id,
                    input: {
                        username,
                    },
                });
                setUser({
                    ...user,
                    username,
                });
                emmitAlert({ text: 'Username changed', status: 'success' });
                reset();
            }
        } catch ({ message }) {
            emmitAlert({ text: message as string, status: 'error' });
        }
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
            <Button>Update username</Button>
        </SUsernameForm>
    );
};
