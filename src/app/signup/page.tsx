'use client'
import  {Meteors}  from "@/components/ui/meteors";
function signup() {
    return (
        <div className="">
 <div className="h-screen w-full relative ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          
        <div className="max-w-2xl mx-auto p-4">
    
          
        <h1 className="relative z-10 text-lg md:text-7xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-10">
                      SINGUP
                    </h1>
                    <input
                        type="text"
                        placeholder="  Your username "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[3rem]"
                    />
                    <input
                        type="email"
                        placeholder="  Your email address "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[3rem]"
                    />
                    <input
                        type="password"
                        placeholder=" password "
                        className="rounded-lg border border-white focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-6  bg-neutral-950 placeholder:text-neutral-70 text-white h-[3rem]"
                    />
                    
                    <button className="mt-6 w-40 h-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-80 transition duration-300">
                        Sign Up
                    </button>
                   
                    
                   
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
        </div>
      </div>
</div>

)
}

export default signup