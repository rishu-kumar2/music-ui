'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
export function Upcoming() {
    return (
        <div className="p-12 bg-gray-900">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>

                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm: text-4xl">Enhance Your Musical Journey</p>

                </div>

                <div className="mt-10">
                  <HoverEffect items={projects}/>
                </div>
           </div>

        </div>

    );
}
export const projects = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      link: "/",
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      link: "#",
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      link: "$",
    },
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      link: "@",
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      link: "!",
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      link: "&",
    },
]
export default Upcoming