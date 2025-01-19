import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const response = await req.json();

    try {
        const data = await resend.emails.send({
            // from: 'Doctor-Appointment@UK123.EU.ORG',
            from: 'Acme <onboarding@resend.dev',
            to: [response.data.Email],
            subject: 'Appointment Booking Confirmation',
            react: EmailTemplate({response}),
        });
        return NextResponse.json({ data: 'Email Sent' })
    } catch (error) {
        return NextResponse.json({ error })
    }
}