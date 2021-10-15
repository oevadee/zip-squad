import { gql } from '@urql/core';

export const VERIFY_TOKEN = gql`
    mutation VerifyTokenMutation($input: AuthVerifyToken!) {
        verifyToken(input: $input) {
            id
            email
            firstName
            lastName
            username
        }
    }
`;
