import { create } from 'zustand';

interface Typing {
    isSubmitted: boolean;
    setSubmit: (status: boolean) => void;
}

const isSubmittedStore = create<Typing>()((set) => ({
    isSubmitted: false,
    setSubmit: (status) =>
        set((state) => ({
            isSubmitted: status,
        })),
}));

export default isSubmittedStore;
