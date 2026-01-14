import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, phone, message } = await req.json();

        if (!email || !message) {
            return NextResponse.json(
                { message: 'Email and message are required fields.' },
                { status: 400 }
            );
        }

        // Create a transporter using environment variables
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Sending to yourself
            subject: `New Contact Form Submission from ${email}`,
            text: `
        You have a new message from your website contact form.
        
        From: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
