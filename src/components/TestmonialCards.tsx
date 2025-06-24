'use client '
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


// import { div } from "framer-motion/client"
const musicSchoolTestmonial = [
    {
        quote:

'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',

name: 'Alex Johnson',

title: 'Guitar Student',
    },
    {
        quote:
     "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",

name: 'Samantha Lee',

title: 'Piano Student',

},

{

quote:

"This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",

name: 'Michael Chen',

title: 'Vocal Student',
   
    },
    {
        quote:

'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',

name: 'Emily Taylor',

title: 'Violin Student',

},

{

quote:

'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',

name: 'Chris Morales',

title: 'Music Production Student',

},
    
]

function MusicSchoolTestmonials(){
    return(
        <div className="h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col item-center justify-center overflow-hidden ">
            <h2 className="text3xl font-bold  text-center mt-20 z-10 md:text-3xl text-white   ">Hear our Harmony: Voices of success</h2>
        <div className="h-[25rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
        items={ musicSchoolTestmonial}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
       
       
    )
}


export default MusicSchoolTestmonials