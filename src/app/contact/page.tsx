'use client'
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function page() {
    return (
        <div className="">
            <div className="h-screen w-full rounded-md bg-slate-900/[1] relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    {/* <SpotlightclassName="-top-40 left-0 md:left-60 md:-top-20"` fill="white" /> */}
                    <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-10">
                        Contact Us
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                        We're here to help with any questions about our courses, program, or events. Reach out and let us know how we can assists you in your musical journey.
                    </p>
                    <input
                        type="email"
                        placeholder="  Your email address "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[3rem]"
                    />
                    <input
                        type="tel"
                        placeholder="  Your Phone Number "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[3rem]"
                    />
                    <textarea
                        
                        placeholder="  Your Message "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[10rem]   "
                    />
                    
                    <div className="mt-4 ">
                        <Button borderRadius="2rem ">

                            Send Messsage
                        </Button>
                        
                    </div>
                    
                </div>

                <BackgroundBeams />
            </div>
        </div>

    )
}

export default page