import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
    persist(
        (set) => ({
            token: '',
            setToken: (token) => set({ token }),
            removeToken: () => set({ token: '' }),
        }),
        {
            name: 'access-token',
        }
    )
);

const authGetter = (state) => {
    return {
        token: state.token,
        setToken: state.setToken,
        removeToken: state.removeToken,
    };
};

export const useAuth = () => useAuthStore(authGetter);

export const getAuth = () => authGetter(useAuthStore.getState());
