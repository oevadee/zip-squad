import { gql } from '@urql/core';

export const GET_ALL_USERS = gql`
    query GetAllUsers {
        getAllUsers {
            id
            firstName
            lastName
            username
        }
    }
`;
