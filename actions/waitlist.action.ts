'use server';


import Email from '@/emails';
import { action } from '@/libs/safe-action';
import { Waitlist } from '@/utils/database/waitlist.query';
import { createWaitlist } from '@/validations/waitlist.validation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);
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

        // sending email
        const { data, error } = await resend.emails.send({
            from: 'noreply@withyouai.com',
            to: [email],
            subject: '🐶 Woof Woof',
            react: Email(),
        });

        if (error) {
            return {
                success: false,
                status: null,
                message: error.message,
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
