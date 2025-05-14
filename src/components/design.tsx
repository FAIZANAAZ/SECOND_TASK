import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    category: "Design Thinking",
    imageSrc: "/desing.png",
    altText: "Wild Horse Event",
    title: "Wild Horse Event",
    href: "/events/wild-horse",
  },
  {
    id: 2,
    category: "Festival",
    imageSrc: "/design1.png",
    altText: "Music & Colors Festival",
    title: "Music & Colors",
    href: "/events/music-colors",
  },
  {
    id: 3,
    category: "Bootcamp",
    imageSrc: "/design2.png",
    altText: "Happy Father's Day Event",
    title: "Happy Father's Day",
    href: "/events/fathers-day",
  },
];

export default function DesignSection() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl text-center sm:text-start md:text-5xl font-bold text-slate-900">
          Design events near your
        </h1>
        <Link
          href="/events"
          className="hidden md:flex items-center text-purple-600 hover:text-purple-700 transition-colors"
        >
          Explore Events <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(({ id, category, imageSrc, altText, title, href }) => (
          <div
            key={id}
            className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-64 w-full">
              <Badge className="absolute top-4 left-4 z-10 bg-purple-100 text-purple-600 hover:bg-purple-200">
                {category}
              </Badge>
              <Image src={imageSrc} alt={altText} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm text-black mb-2">{category}</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
              <Link
                href={href}
                className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                Buy Tickets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Explore Events Link */}
      <div className="mt-8 flex justify-center md:hidden">
        <Link
          href="/events"
          className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
        >
          Explore Events <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}
