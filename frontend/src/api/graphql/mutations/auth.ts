import { gql } from '@urql/core';

export const CREATE_USER_MUTATION = gql`
    mutation RegisterMutation($input: AuthRegisterInput!) {
        register(input: $input) {
            token
            user {
                id
                email
                firstName
                lastName
                username
            }
        }
    }
`;

export const LOGIN_USER_MUTATION = gql`
    mutation LoginMutation($input: AuthLoginInput!) {
        login(input: $input) {
            access_token
            user {
                id
                email
                firstName
                lastName
                username
            }
        }
    }
`;

export const VERIFY_TOKEN = gql`
    mutation VerifyTokenMutation($input: AuthVerifyToken!) {
        verifyToken(input: $input) {
            status
            user {
                id
                email
                firstName
                lastName
                username
            }
        }
    }
`;
