'use client'
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

function page() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully!');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                setStatus('error');
                setStatusMessage(data.message || 'Something went wrong.');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setStatusMessage('Failed to send message.');
        } finally {
            // Reset status after 5 seconds
            setTimeout(() => {
                if (status === 'success') {
                    setStatus(null);
                    setStatusMessage('');
                }
            }, 5000);
        }
    };

    return (
        <div className="">
            <div className="h-screen w-full rounded-md bg-slate-900/[1] relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4 relative z-20">
                    <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-10">
                        Contact Us
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                        We&apos;re here to help with any questions about our courses, program, or events. Reach out and let us know how we can assists you in your musical journey.
                    </p>
                    <form onSubmit={handleSubmit} className="relative z-10">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full mt-6 bg-neutral-950 placeholder:text-neutral-500 text-white p-4"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full mt-6 bg-neutral-950 placeholder:text-neutral-500 text-white p-4"
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full mt-6 bg-neutral-950 placeholder:text-neutral-500 text-white p-4 h-[10rem]"
                        />

                        <div className="mt-4 flex flex-col items-center">
                            <Button
                                borderRadius="2rem"
                                type="submit"
                                className="bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                            {statusMessage && (
                                <p className={`mt-4 text-center text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                                    {statusMessage}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                <BackgroundBeams />
            </div>
        </div>
    )
}

export default page;