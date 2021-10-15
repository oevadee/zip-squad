import { CREATE_USER_MUTATION } from 'api/graphql/mutations/auth';
import { useMutation } from 'urql';

export const useCreateUser = () => {
    const [state, executeMutation] = useMutation(CREATE_USER_MUTATION);

    const createUser = async (input: any) => {
        const { error, data } = await executeMutation({ input });

        if (error) return { error: error.graphQLErrors[0].extensions?.code };

        return { data };
    };

    return {
        state,
        createUser,
    };
};
