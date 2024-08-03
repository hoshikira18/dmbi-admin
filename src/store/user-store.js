import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
    persist(
        (set) => ({
            isLogin: false,
            setLogin: (isLogin) => set({ isLogin }),
            removeLogin: () => set({ isLogin: false }),
        }),
        {
            name: 'login-status',
        }
    )
);

const userGetter = (state) => {
    return {
        isLogin: state.isLogin,
        setLogin: state.setLogin,
        removeLogin: state.removeLogin,
    };
};

export const useUser = () => useUserStore(userGetter);

export const getUser = () => userGetter(useUserStore.getState());
