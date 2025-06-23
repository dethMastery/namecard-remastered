export interface dataConst {
  image: string;
  name: string;
  desp: string;
  links: {
    facebook: string;
    instagram: string;
    discord?: string;
    github?: string;
    website?: string;
  };
}

export const mainData: dataConst = {
  image: "https://avatars.githubusercontent.com/u/25049577?v=4",
  name: "Suphakit P.",
  desp: "a music composer with full-stack web dev. skill :D",
  links: {
    facebook: "https://fb.com/detzz.in.th",
    instagram: "https://www.instagram.com/detzz.in.th/",
    discord: "https://discordid.netlify.app/?id=387465159322632202",
    github: "https://github.com/dethMastery",
  },
};

export const photoData: dataConst = {
  image: "https://cdn.detzz.in.th/fe6e6f%20plain.png",
  name: "#fe6e6f (George)",
  desp: "a wandering photographer who wandered around :3",
  links: {
    facebook: "https://fb.com/fe6e6f",
    instagram: "https://instagram.com/fe6e6f",
    website: "https://www.playbook.com/s/fe6e6f/random-gallery",
  },
};
