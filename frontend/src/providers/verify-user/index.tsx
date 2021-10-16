import React, { ReactNode, useEffect, useState } from 'react';
import { useVerifyToken } from 'api/graphql/hooks/auth/useVerifyToken';
import { Spinner } from 'components/spinner';
import { LS_AUTH_TOKEN } from 'constants/auth';
import { useUser } from 'providers/user';

interface Props {
    children: ReactNode;
}

export const VerifyUser = ({ children }: Props) => {
    const { verifyToken } = useVerifyToken();
    const { setUser } = useUser();
    const [isLoading, setIsLoading] = useState(true);

    const verify = async () => {
        try {
            const token = localStorage.getItem(LS_AUTH_TOKEN);
            const user = token && (await verifyToken(token));
            user && setUser(user);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        verify();
    }, []);

    if (isLoading) return <Spinner />;

    return <>{children}</>;
};
