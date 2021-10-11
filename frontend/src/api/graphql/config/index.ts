import { createClient, fetchExchange } from 'urql';
import { API_URL } from 'constants/api';
import { LS_AUTH_TOKEN } from 'constants/auth';

export const client = createClient({
    url: API_URL,
    fetchOptions: () => {
        const token = localStorage.getItem(LS_AUTH_TOKEN);
        return {
            headers: { authorization: token ? `Bearer ${token}` : '' },
        };
    },
});
