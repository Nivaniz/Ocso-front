'use client';

import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import {LuPlus, LuTrash} from "react-icons/lu";

export default function DeleteProvider({children}: {children: ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button onPress={onOpen} color="danger"><LuTrash size="20"/></Button>
        <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalBody>
                    {children}
                    <Button onPress={onClose}> Cancelar </Button>
                </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}