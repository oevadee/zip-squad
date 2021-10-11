import { User } from 'constants/testUser';
import React, {
    Dispatch,
    SetStateAction,
    useContext,
    createContext,
    ReactNode,
    useMemo,
    useState,
} from 'react';

export interface UserStore {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserStore | null>(null);

export const useUser = () => useContext(UserContext) as UserStore;

interface Props {
    children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const userStore = useMemo<UserStore>(
        () => ({
            user,
            setUser,
        }),
        [user, setUser],
    );

    return <UserContext.Provider value={userStore}>{children}</UserContext.Provider>;
};
