import { GET_ALL_USERS } from 'api/graphql/queries/user';
import { useQuery } from 'urql';

export const useGetAllUsers = () => {
    const [{ data, fetching, error }, reexecuteQuery] = useQuery({ query: GET_ALL_USERS });

    if (error) return { error };

    return { data: data?.getAllUsers, fetching, reexecuteQuery };
};
