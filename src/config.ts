import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    currentStack: string;
    hobby: string;
    projectLink: string;
  };
  techStack: {
    [name: string]: {
      name: string;
      icon: string;
    };
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Mehdi Merkachi",
    job: "backend engineer",
    started: "2022-09-01",
    currentStack: "AdonisJS",
    hobby: "Play football, snowboard and travel",
    projectLink: "https://github.com/Mmehdi06?tab=repositories",
  },
  techStack: {
    react: {
      name: "React",
      icon: "https://reactjs.org/favicon.ico",
    },
    node: {
      name: "Node.js",
      icon: "https://nodejs.org/static/images/favicons/favicon.ico",
    },
  },
  socials: {
    // twitter: "https://twitter.com/mehdimerkachi",
    github: "https://github.com/Mmehdi06",
  },
  projects: {
    react: {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: icon.src, // Make sure icon.src is properly defined elsewhere in your code
  },
};
