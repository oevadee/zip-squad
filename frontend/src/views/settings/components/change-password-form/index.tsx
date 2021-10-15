import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Button } from 'components/button';
import { Input } from 'components/input';
import { ChangePasswordFormProps } from 'views/settings/types';
import { emmitAlert } from 'utils/emmitAlert';
import { useUpdateUsername } from 'api/graphql/hooks/user/useUpdateUsername';
import { useUser } from 'providers/user';

const SInput = styled(Input)`
    -webkit-text-security: disc;
`;

export const ChangePasswordForm = () => {
    const { register, handleSubmit, getValues, reset } = useForm();
    const { updateUsername } = useUpdateUsername();
    const { user } = useUser();

    const onSubmit = async ({ password, confirmPassword }: ChangePasswordFormProps) => {
        try {
            if (password.length < 6)
                throw new Error('Password must be at least 6 characters long.');
            if (password !== confirmPassword) throw new Error(`Password doesn't match.`);

            if (user) {
                await updateUsername({
                    userId: user.id,
                    input: {
                        password,
                    },
                });
                emmitAlert({ text: 'Password changed', status: 'success' });
                reset();
            }
        } catch ({ message }) {
            emmitAlert({ text: message as string, status: 'error' });
        }
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
            <SInput
                type="text"
                label="Confirm password"
                name="confirmPassword"
                register={register}
                getValues={getValues}
                placeholder="Confirm your password"
            />
            <Button>Update password</Button>
        </form>
    );
};
