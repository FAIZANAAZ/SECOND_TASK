import Image from "next/image";
import Link from "next/link";


export default function Bigection() {
  return (
    <main className="bg-[#581C87]  sm:px-[50px] md:px-[105px] flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-8 lg:py-24 overflow-hidden text-white">
      <div className="text-center md:text-start max-w-3xl mb-8 md:mb-0 md:pr-6">
        <p className="text-[12px] sm:text-sm uppercase text-white font-semibold tracking-widest mb-3">
          Testimonials
        </p>
        <h2 className="text-[20px] sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        <span className="border-b-3 border-purple-700">
            Bigapp</span> got to the next level
        </h2>
        <Link 
          href="/discover-ideas" 
          className="text-white sm:font-semibold flex text-center  gap-2 hover:underline text-[12px] sm:text-lg"
        >
         How Targeting Customers Works <span className="">→</span>
        </Link>
       
      </div>
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
        <Image 
          src="/Mobile-App-Placeholder.png" 
          alt="Discover Illustration" 
          height={400} 
          width={250}
          className="w-[200px] sm:w-[250px] md:w-[400px] h-auto object-contain" 
        />
      </div>

      <div>
        <p className="text-gray-300 leading-[15px] sm:mb-8 text-[11px] sm:text-lg sm:leading-relaxed max-w-2xl">
         Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
        </p>
        <div>

<div className="flex w-full md:w-auto  justify-start items-center">
        <Image 
          src="/UserThumb.png" 
          alt="Discover Illustration" 
          height={48} 
          width={48}
          className="" 
        />
        <p className="text-gray-300 leading-[15px]
        sm:leading-relaxed  text-[11px] sm:text-lg  max-w-2xl">
         Rwanda Melflor Co-founder Bigapp
        </p>
      </div>
        </div>
      </div>
    </main>
  );
}