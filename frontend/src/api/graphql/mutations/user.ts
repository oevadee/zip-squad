import { gql } from '@urql/core';

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUserMutation($userId: Float!, $input: UpdateUserUsernameInput!) {
        updateUser(userId: $userId, input: $input) {
            username
            password
        }
    }
`;
