import React, { useEffect } from 'react';
import { Spinner } from '@nextui-org/spinner';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/modal';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAction } from 'next-safe-action/hooks';
import Realistic from 'react-canvas-confetti/dist/presets/realistic';
import { TConductorInstance } from 'react-canvas-confetti/dist/types';
import {
    createWaitlist,
    TypeCreateWaitlistSchema,
} from '@/validations/waitlist.validation';
import JoinWaitlist from '@/actions/waitlist.action';
import toast, { Toaster } from 'react-hot-toast';
import isSubmittedStore from '@/store/IsSubmitted';

interface ModalProp {
    closeIt: any;
    isOpen: any;
    onOpenChange: any;
}

export default function WaitListModal({
    isOpen,
    onOpenChange,
    closeIt,
}: ModalProp) {
    const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
        conductor?.shoot();
    };
    const { setSubmit } = isSubmittedStore();
    const { execute, status, result } = useAction(JoinWaitlist);
    const {
        handleSubmit,
        formState: { isSubmitting },
        register,
    } = useForm<TypeCreateWaitlistSchema>({
        resolver: zodResolver(createWaitlist),
    });

    useEffect(() => {
        if (result.data?.success) {
            setSubmit(true);
            closeIt();
            switch (result.data.status) {
                case 'created':
                    toast.success(
                        '🎉 You have successfully joined the waitlist.'
                    );
                    break;
                case 'existed':
                    console.log('already created.');
                    toast.success('✨ You are already on the waitlist.');
                    break;
            }
        }

        if (!result.data?.success && result.data?.message) {
            toast.error(`${result.data.message}`);
        }
    }, [result]);

    const onSubmit = async (data: TypeCreateWaitlistSchema) => {
        execute(data);
    };

    return (
        <>
            <Toaster />
            {result.data?.success && <Realistic onInit={onInit} />}

            <Modal
                placement="center"
                isOpen={isOpen}
                onClose={closeIt}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ModalHeader className="flex flex-col gap-1">
                                <h1 className="text-[#475465] text-lg font-bold">
                                    Join Waitlist ⌛
                                </h1>
                            </ModalHeader>
                            <ModalBody className="space-y-2">
                                <Input
                                    {...register('email')}
                                    required={true}
                                    type="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                />
                                <Textarea
                                    {...register('feeling')}
                                    maxRows={3}
                                    label="Your feeling"
                                    placeholder="Share your thoughts on this app (optional)"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    isDisabled={
                                        isSubmitting || status == 'executing'
                                    }
                                    type="submit"
                                    radius="md"
                                    className={`bg-gradient-to-tr from-pink-500 to-yellow-500 text-white font-bold text-sm ${isSubmitting || status == 'executing' ? 'opacity-60' : ''}`}
                                >
                                    {isSubmitting || status == 'executing' ? (
                                        <Spinner
                                            color="white"
                                            size="sm"
                                            className="mx-auto"
                                        />
                                    ) : (
                                        <>Submit</>
                                    )}
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
