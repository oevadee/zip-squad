import theme from 'constants/theme';
import React, { ReactNode } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
        border: 'none',
        borderRadius: 25,
        background: theme.colors.background,
        width: '60%',
        height: '40%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface Props {
    children: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
    afterOpenModal?: () => void;
}

export const CustomModal = ({ children, isOpen, closeModal, afterOpenModal }: Props) => {
    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    );
};
