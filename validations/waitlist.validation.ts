import * as z from 'zod';

export const createWaitlist = z.object({
    email: z.string().email(),
    feeling: z.string().min(0),
});

export type TypeCreateWaitlistSchema = z.infer<typeof createWaitlist>;
