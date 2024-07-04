'use server';

import { action } from '@/libs/safe-action';
import { Waitlist } from '@/utils/database/waitlist.query';
import { createWaitlist } from '@/validations/waitlist.validation';

const JoinWaitlist = action(createWaitlist, async ({ email, feeling }) => {
    //check if the email is already submitted or not.
    try {
        const waitlist = await Waitlist.exist(email);

        if (waitlist) {
            return {
                success: true,
                status: 'existed',
            };
        }

        await Waitlist.create({
            email,
            feeling,
        });

        return {
            success: true,
            status: 'created',
        };
    } catch (err) {
        return {
            success: false,
            status: null,
            message: err,
        };
    }
});

export default JoinWaitlist;
