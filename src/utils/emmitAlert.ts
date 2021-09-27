import { ReactElement } from 'react';
import { toast } from 'react-toastify';

interface Props {
    status: 'info' | 'error' | 'success' | 'warn';
    text: string;
    icon?: false | ReactElement;
}

export const emmitAlert = ({ status, text, icon = false }: Props) => {
    return toast[status](text, {
        icon,
        theme: 'dark',
    });
};
