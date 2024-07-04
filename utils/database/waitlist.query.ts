import { db } from '@/libs/db';

async function exist(email: string) {
    try {
        const waitlist = await db.waitingList.findUnique({
            where: {
                email,
            },
        });
        return waitlist;
    } catch (err) {
        console.log('Error while checking email existence:\n', err);
        throw new Error(`Failed to check existence of email.`);
    }
}

async function create({ email, feeling }: { email: string; feeling: string }) {
    try {
        const newWaitList = await db.waitingList.create({
            data: {
                email,
                feeling,
            },
        });
        return newWaitList;
    } catch (err) {
        console.log('Error while creating new waitlist:\n', err);
        throw new Error(`Failed to create waitlist.`);
    }
}

export const Waitlist = {
    create,
    exist,
};
