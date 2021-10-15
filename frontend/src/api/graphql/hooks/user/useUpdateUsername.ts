import { useMutation } from 'urql';
import { UPDATE_USER_MUTATION } from '../../mutations/user';

export const useUpdateUsername = () => {
    const [state, executeMutation] = useMutation(UPDATE_USER_MUTATION);

    const updateUsername = async (input: any) => {
        const { error, data } = await executeMutation(input);

        if (error) return { error: error.graphQLErrors[0].extensions?.code };

        return { data };
    };

    return {
        state,
        updateUsername,
    };
};
