import Image from "next/image";
import localfont from "next/font/local"
import Link from "next/link"
const zenfonts = localfont({
  src: "/fonts/ZenLoop-Regular.ttf",
  variable: "--font-zenfonts",
  weights: [400, 700],
  // size: "56px",
})

export default function Home() {
  return (<>
    <main>
      <section className={`gird grid-cols-2  flex md:py-20 max-md:flex-col ${zenfonts.className} `}>


        <div className="flex flex-col items-center justify-center w-[40%] py-10 max-md:w-full bg-gray-5000">
          <h1 className="text-7xl font-bold text-gray-950">Welcome to Link Tweak</h1>
          <p className="text-3xl font-bold text-gray-800">The best link shortener in the world</p>

          <div className="text-2xl font-bold text-gray-700 mt-12 bg-gray-500 bg-opacity-35 rounded-3xl p-4 w-[80%] max-md:w-[90%]  drop-shadow-2xl">
            "Our platform allows you to shorten your links quickly and efficiently, providing you with detailed analytics and custom options to make your links stand out. Whether you're a marketer, a business owner, or just someone who wants to share links more effectively, Link Tweak has the tools you need to succeed. Join us today and start optimizing your links for better performance and engagement."
          </div>

          {/* nav buttons */}
          <div className="flex justify-center items-center font-sans space-x-4 mt-8">
            <button className="px-2 py-1 font-bold bg-gray-800 text-white rounded-md">Try Now</button>
            <Link href='/github'><button className='bg-slate-800 bg-blackl rounded-full flex justify-center items-center hover:bg-slate-700 duration-300'>
              <span><img className='w-8' src="icons/icons-github-cat.png" alt="" /></span>
              <span><img className='invert w-10 mr-1' src="icons/github-logo.png" alt="" /></span>
            </button>
            </Link>
          </div>

        </div>


        <div className="w-[60%] max-md:w-full bg-green-3000">
          <img className="rounded-2xl w-[95%] mix-blend-darken mx-auto drop-shadow-2xl" src="/wide-cover.webp" alt="" />
        </div>


      </section>
    </main>



  </>);
}
