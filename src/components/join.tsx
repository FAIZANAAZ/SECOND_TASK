import Image from "next/image";

const companies = [
  { name: "SmartFinder", logo: "/icon1.png" },
  { name: "Zoomerr", logo: "/icon2.png" },
  { name: "SHELLS", logo: "/icon3.png" },
  { name: "WAVES", logo: "/icon4.png" },
  { name: "ArtVenue", logo: "/icon5.png" },
];

export default function JoinCompanies() {
  return (
    <section className=" text-white mb-6 sm:mb-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Join Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {companies.map(({ name, logo }) => (
            <div
              key={name}
              className="flex  flex-wrap  items-center sm:gap-3 "
            >
              <Image
                src={logo}
                alt={name}
                width={40}
                height={40}
                className="mx-auto w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] sm:mx-0"
              />
              <span className="sm:text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
