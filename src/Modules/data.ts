export interface linkInterface {
  link: string;
  name: string;
}

export interface dataConst {
  image: string;
  name: string;
  desp: string;
  links: {
    facebook: linkInterface | null;
    instagram: linkInterface | null;
    discord?: linkInterface | null;
    github?: linkInterface | null;
    website?: linkInterface | null;
  };
}

export const mainData: dataConst = {
  image: "https://avatars.githubusercontent.com/u/25049577?v=4",
  name: "Suphakit P.",
  desp: "a music composer with full-stack web dev. skill :D",
  links: {
    facebook: {
      link: "https://fb.com/detzz.in.th",
      name: "George Katsuragi Deterk",
    },
    instagram: {
      link: "https://www.instagram.com/detzz.in.th/",
      name: "@detzz.in.th",
    },
    discord: {
      link: "https://discordid.netlify.app/?id=387465159322632202",
      name: "@_georgekd",
    },
    github: {
      link: "https://github.com/dethMastery",
      name: "dethMastery",
    },
  },
};

export const photoData: dataConst = {
  image: "https://cdn.detzz.in.th/fe6e6f%20plain.png",
  name: "#fe6e6f (George)",
  desp: "a wandering photographer who wandered around :3",
  links: {
    facebook: {
      link: "https://fb.com/fe6e6f",
      name: "FE6e6f",
    },
    instagram: {
      link: "https://instagram.com/fe6e6f",
      name: "@fe6e6f",
    },
    website: {
      link: "https://www.playbook.com/s/fe6e6f/random-gallery",
      name: "fe6e6f's Gallery",
    },
  },
};
