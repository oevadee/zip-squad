import { useMutation } from 'urql';
import { LOGIN_USER_MUTATION } from '../mutations/user';

export const useLoginUser = () => {
    const [state, executeMutation] = useMutation(LOGIN_USER_MUTATION);

    const loginUser = async (input: any) => {
        const { error, data } = await executeMutation({ input });

        if (error) return { error: error.graphQLErrors[0].extensions?.code };

        return { data };
    };

    return {
        state,
        loginUser,
    };
};
