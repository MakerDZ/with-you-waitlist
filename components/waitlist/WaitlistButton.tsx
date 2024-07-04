'use client';
import { Button } from '@nextui-org/button';
import WaitListModal from './WaitlistModal';
import { useDisclosure } from '@nextui-org/modal';
import isSubmittedStore from '@/store/IsSubmitted';
import toast, { Toaster } from 'react-hot-toast';

export default function WaitlistButton() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { isSubmitted } = isSubmittedStore();
    return (
        <>
            <Toaster />
            <Button
                onClick={
                    !isSubmitted
                        ? onOpen
                        : () => {
                              toast.success(
                                  '✨ You are already on the waitlist.'
                              );
                          }
                }
                radius="md"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-bold sm:text-base text-sm max-w-[150px]"
            >
                Join WaitList
            </Button>
            <WaitListModal
                closeIt={onClose}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
}
