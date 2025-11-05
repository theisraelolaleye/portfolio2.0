import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";


export default function Home() {
  return (

   
    <div className=" max-w-[1410px] mx-auto  ">

      <div className=" grid grid-cols-2">
        <div className="w-1/2"></div>
        <div>

          <Image src="/israel-olaleye.png" alt="" className=" " height={500} width={500} />
        </div>
      </div>

      <div className=" w-full pb-10 relative -mt-48 " >

        <div className="px-20">
          <h2 className=" mb-4 text-gray-400 ">Frontend Developer at Independence Lab Technologies</h2>
          <h1 className="mb-5 z-20 text-5xl" >Israel Olaleye</h1>
        </div>

        <div className=" bg-gray-700 z-10 w-full px-20 -mt-10 pt-20 pb-10 flex flex-row justify-between   " >

          {/* <p className=" absolute left-5 top-32 -rotate-90 flex items-center gap-x-5 "> <FaArrowLeft /> Scroll</p> */}

          <div className=" w-1/2  text-gray-300 " >

            {/* <h2 className=" text-xl text-white font-semibold mb-6 ">About</h2> */}

            <p className="text-justify text-2xl" >
              Hi there, I am a creative developer based in Lagos, Nigeria. I specialize in crafting visually stunning and user-friendly digital experiences that captivate audiences and drive engagement.


            </p>
          </div>

          <div className=" w-fit   "   >
            <h2 className="text-white font-semibold text-xl mb-6 ">Technologies</h2>

            <ul >
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className=" w-fit" >
            <h2 className=" text-white font-semibold text-xl mb-6 " >Contacts</h2>

            <ul >
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
