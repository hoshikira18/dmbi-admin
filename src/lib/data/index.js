import { medusaClient } from '@/lib/config';

export const getToken = async (email, password) => {
    const access_token = medusaClient.admin.auth
        .getToken({
            email,
            password,
        })
        .then(({ access_token }) => {
            return access_token;
        });
    return access_token;
};