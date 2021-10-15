import { useMutation } from 'urql';
import { VERIFY_TOKEN } from 'api/graphql/mutations/auth';

export const useVerifyToken = () => {
    const [state, executeMutation] = useMutation(VERIFY_TOKEN);

    const verifyToken = async (token: string) => {
        const { error, data } = await executeMutation({
            input: {
                token,
            },
        });

        if (error) return { error: error.graphQLErrors[0].extensions?.code };

        const { verifyToken } = data;

        return { user: verifyToken };
    };

    return {
        state,
        verifyToken,
    };
};
