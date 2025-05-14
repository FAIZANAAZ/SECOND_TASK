import Image from "next/image";
import Link from "next/link";

export default function ToolsSection() {
  return (
    <main className=" flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-8 lg:py-24 overflow-hidden text-white">
      <div className="text-center md:text-start max-w-3xl mb-8 md:mb-0 md:pr-6">
        <p className="text-[12px] sm:text-sm uppercase text-white font-semibold tracking-widest mb-3">
          Powerful
        </p>
        <h2 className="text-[20px] sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
All the tools you can imagine
        </h2>
        <p className="text-gray-300 leading-[15px] sm:mb-8 text-[11px] sm:text-lg sm:leading-relaxed max-w-2xl">
         Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
        </p>
       
      </div>
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
        <Image 
          src="/Desktop.png" 
          alt="Discover Illustration" 
          height={700} 
          width={700}
          className="w-[200px] sm:w-[250px] md:w-[600px] h-auto object-contain" 
        />
      </div>
    </main>
  );
}