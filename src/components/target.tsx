import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function TargetSection() {
  return (
    <main className=" flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-8 lg:py-24 overflow-hidden text-white">
      <div className="text-center sm:text-start  max-w-3xl mb-8 md:mb-0 md:pr-6">
        <p className="text-xs sm:text-sm uppercase text-white font-semibold tracking-widest mb-3">
          Customers
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-purple-500">Target</span>{" "}
          <Button className="text-2xl sm:text-4xl md:text-6xl font-bold rounded-none leading-tight bg-pink-600 p-1 py-4">cu</Button>stomers with our powerful AI kit
        </h2>
        <p className="text-gray-300 mb-8 text-[12px] sm:text-lg leading-[13px] sm:leading-relaxed max-w-2xl">
          Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
        </p>
        <Link 
          href="/discover-ideas" 
          className="text-white font-semibold flex items-center gap-2 hover:underline text-base sm:text-lg"
        >
         How Targeting Customers Works <span className="text-xl">→</span>
        </Link>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
        <Image 
          src="/targetshap.png" 
          alt="Discover Illustration" 
          height={300} 
          width={300}
          className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain" 
        />
      </div>
    </main>
  );
}