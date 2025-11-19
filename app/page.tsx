import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";


export default function Home() {
  return (
    <div className=" max-w-[1410px] mx-auto w-full ">

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        <div className="w-full md:w-1/2"></div>
        <div className=" flex justify-center md:justify-start ">
          <Image
            src="/israel-olaleye.png"
            alt="Israel Olaleye"
            className=" w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto "
            height={500}
            width={500}
          />
        </div>
      </div>

      <div className=" w-full pb-10 relative md:-mt-48 mt-0 " >

        <div className="px-4 md:px-10 lg:px-20">
          <h2 className=" mb-3 md:mb-4 text-sm md:text-base text-gray-400 ">
            Frontend Developer at Independence Lab Technologies
          </h2>
          <h1 className="mb-5 z-20 text-3xl md:text-4xl lg:text-5xl font-bold" >
            Israel Olaleye
          </h1>
        </div>

        <div className=" bg-gray-700 z-10 w-full px-4 md:px-10 lg:px-20 mt-0 md:-mt-10 pt-10 md:pt-20 pb-10 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between " >

          {/* <p className=" absolute left-5 top-32 -rotate-90 flex items-center gap-x-5 "> <FaArrowLeft /> Scroll</p> */}

          <div className=" w-full md:w-1/2 text-gray-300 " >

            {/* <h2 className=" text-xl text-white font-semibold mb-6 ">About</h2> */}

            <p className="text-justify text-base md:text-xl lg:text-2xl leading-relaxed" >
              Hi there, I am a creative developer based in Lagos, Nigeria. I specialize in crafting visually stunning and user-friendly digital experiences that captivate audiences and drive engagement.
            </p>
          </div>

          <div className=" w-full md:w-fit " >
            <h2 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6 ">Technologies</h2>

            <ul className=" space-y-1 md:space-y-2 text-sm md:text-base " >
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className=" w-full md:w-fit" >
            <h2 className=" text-white font-semibold text-lg md:text-xl mb-4 md:mb-6 " >Services</h2>

            <ul className=" space-y-1 md:space-y-2 text-sm md:text-base " >
              <li>Frontend Development</li>
              <li>Wordpress Development</li>
              <li>E-commerce Site Development</li>
            </ul>

          </div>



        </div>

      </div>

    </div>
  );
}
