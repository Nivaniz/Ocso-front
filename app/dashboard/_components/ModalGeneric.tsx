'use client';

import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import {LuPencil, LuPlus} from "react-icons/lu";

export default function ModalGeneric({children, icon}: {children: ReactNode, icon?: ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button onPress={onOpen} color="primary">{icon}</Button>
        <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {() => (
                <>
                <ModalBody>
                    {children}
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}