import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { useGetAllUsers } from 'api/graphql/hooks/user/useGetAllUsers';
import { User, useUser } from 'providers/user';
import { OptionType } from 'components/custom-select';

type Modal = {
    isOpen: boolean;
    page: number;
    selectedUserId: number | null;
    somebodyOwesMe: boolean | undefined;
};

interface DashboardStore {
    modal: Modal;
    setModal: Dispatch<SetStateAction<Modal>>;
    fetching: boolean | undefined;
    users: OptionType[];
}

const DashboardContext = createContext<DashboardStore | null>(null);

export const useDashboardContext = () => useContext(DashboardContext) as DashboardStore;

interface Props {
    children: ReactNode;
}

export const DashboardContextProvider = ({ children }: Props) => {
    const [modal, setModal] = useState<Modal>({
        isOpen: false,
        page: 1,
        selectedUserId: null,
        somebodyOwesMe: undefined,
    });
    const { user } = useUser();
    const { data, fetching } = useGetAllUsers();

    const users = data
        ?.filter(({ id }: User) => user?.id !== id)
        .map((user: User) => ({
            value: user.id,
            label: user.username,
        }));

    const dashboardStore = {
        users,
        modal,
        setModal,
        fetching,
    };

    return <DashboardContext.Provider value={dashboardStore}>{children}</DashboardContext.Provider>;
};
