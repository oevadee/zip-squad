import { useMutation } from 'urql';
import { VERIFY_TOKEN } from 'api/graphql/mutations/auth';

export const useVerifyToken = () => {
    const [state, executeMutation] = useMutation(VERIFY_TOKEN);

    const verifyToken = async (access_token: string): Promise<any> => {
        const { error, data } = await executeMutation({
            input: {
                access_token,
            },
        });

        if (error) return { error: error.graphQLErrors[0].extensions?.code };

        return { data };
    };

    return {
        state,
        verifyToken,
    };
};
