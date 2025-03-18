interface Sponsor {
  name: string;
  img: string;
  url: string;
  description: string;
  new: boolean;
}

export const sponsorData: Sponsor[] = [
  {
    name: "Visit Pittsburgh",
    img: "VP_Logo_1.jpg",
    url: "https://www.visitpittsburgh.com/",
    description: "VisitPITTSBURGH, along with our network of community partners, has worked to craft a 10-Year Tourism Development Plan that establishes the foundation for a more impactful and prosperous tourism ecosystem.",
    new: false,
  },
  {
    name: "Rush 2 Crush Cancer",
    img: "r2c.svg",
    url: "https://www.rushtocrushcancer.org/",
    description: "UPMC Hillman Cancer Center's goal is life without cancer and Rush to Crush Cancer's sole mission is to help achieve this goal with each push of the pedal.",
    new: false,
  },
  {
    name: "Never Second",
    img: "Never2.png",
    url: "https://never2.com/",
    description: "Science First. Neversecond.",
    new: false,
  },
  {
    name: "Abus",
    img: "Abus.png",
    url: "https://www.abus.com/usa",
    description: "At ABUS, we have a steadfast commitment: your peace of mind. Our primary focus is to deliver security and safety solutions that guarantee peace of mind for your residence, business, or leisure activities. For nearly a century, we have been developing security solutions for homes, diverse industries, and individuals on the move.",
    new: false,
  },
  {
    name: "Silca",
    img: "silca.avif",
    url: "silca.cc",
    description: "The world leader in quality bicycle accessories with a relentless pursuit of perfection. Now offering chain lube, bar tape, pumps, tools, packs and more.",
    new: false,
  },
  {
    name: "ATP Race Consulting",
    img: "atp.jpg",
    url: "https://www.atpraceconsulting.info/",
    description: "ATP Race Consulting is a cycling coaching service committed to making better cyclists of all levels. Whether you want to finish the local group ride or be at the front at a national championship, ATP Race Consulting can help you achieve top performance.",
    new: false,
  },
  {
    name: "Big Dog Coffee",
    img: "bigdog.jpg",
    url: "https://www.bigdogcoffeeshop.com/",
    description: "This quaint nook in a vintage building offers a variety of gourmet brews, light fare & desserts.",
    new: false,
  },
  {
    name: "Summit DevLabs",
    img: "SDL_Logo_float.png",
    url: "https://www.summitdevlabs.com/",
    description: "Custom software development and consulting services.",
    new: true
  }
];

