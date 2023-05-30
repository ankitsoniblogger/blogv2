import React from "react";

const topTag = [
  "Artificial Intelligence",
  "Business & Tech",
  "Connectivity",
  "Cybersecurity",
  "Future Tech",
  "Blockchain",
  "Science",
];

const BannerText = () => {
  return (
    <div className=" p-4 ">
      <div className="max-w-screen-md text-center mx-auto ">
        <p className="text-sm font-semibold ">
          Revolutionizing Technological Frontiers
        </p>
        <h1 className="md:text-5xl text-3xl text-[#2F323D] font-bold tracking-tighter  mt-4">
          Tech it to the Limit <br /> Join the Tech Revolution Today
        </h1>
        <h3 className="font-light md:text-xl text-[#67717a] mt-4 tracking-tight">
          Join the community of tech heroes and embark on a journey of
          innovation and discovery.
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {topTag.map((name, index) => (
          <p
            key={index}
            className="bg-white p-1 px-2 rounded text-sm font-medium tracking-tight cursor-pointer hover:bg-[#2d5de0] hover:text-white ease-linear"
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BannerText;
