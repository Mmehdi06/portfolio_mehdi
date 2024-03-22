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
      [skill: string]: {
        name: string;
        icon: string;
        url: string;
      };
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
    Languages: {
      java: {
        name: "Java",
        icon: "/src/assets/icons/javaIcon.svg",
        url: "https://www.java.com/",
      },
      cSharp: {
        name: "C#",
        icon: "/src/assets/icons/csharpIcon.svg",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      javascript: {
        name: "Javascript",
        icon: "/src/assets/icons/javascriptIcon.svg",
        url: "https://w3schools.com/js/",
      },
      typescript: {
        name: "TypeScript",
        icon: "/src/assets/icons/typescriptIcon.svg",
        url: "https://www.typescriptlang.org/",
      },
      python: {
        name: "Python",
        icon: "/src/assets/icons/pythonIcon.svg",
        url: "https://www.python.org/",
      },
      php: {
        name: "PHP",
        icon: "/src/assets/icons/phpIcon.svg",
        url: "https://www.php.net/",
      },
      html: {
        name: "HTML",
        icon: "/src/assets/icons/htmlIcon.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      css: {
        name: "CSS",
        icon: "/src/assets/icons/cssIcon.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    },
    Frontend: {
      react: {
        name: "React",
        icon: "/src/assets/icons/reactIcon.svg",
        url: "https://reactjs.org/",
      },
      solidjs: {
        name: "SolidJS",
        icon: "/src/assets/icons/solidjsIcon.svg",
        url: "https://solidjs.com/",
      },
      astro: {
        name: "Astro",
        icon: "/src/assets/icons/astroIcon.svg",
        url: "https://astro.build/",
      },
      // Add more frontend frameworks here
    },
    Backend: {
      nodejs: {
        name: "Node.js",
        icon: "/src/assets/icons/nodejsIcon.svg",
        url: "https://nodejs.org/",
      },
      laravel: {
        name: "Laravel",
        icon: "/src/assets/icons/laravelIcon.svg",
        url: "https://laravel.com/",
      },
      adonisjs: {
        name: "AdonisJS",
        icon: "/src/assets/icons/adonisjsIcon.svg",
        url: "https://adonisjs.com/",
      },
      dotnet: {
        name: ".NET",
        icon: "/src/assets/icons/dotnetIcon.svg",
        url: "https://dotnet.microsoft.com/",
      },
      // Add more backend frameworks here
    },
    Extras: {
      tailwindcss: {
        name: "TailwindCSS",
        icon: "/src/assets/icons/tailwindcssIcon.svg",
        url: "https://tailwindcss.com/",
      },
      git: {
        name: "Git",
        icon: "/src/assets/icons/gitIcon.svg",
        url: "https://git-scm.com/",
      },
      docker: {
        name: "Docker",
        icon: "/src/assets/icons/dockerIcon.svg",
        url: "https://www.docker.com/",
      },
      linux: {
        name: "Linux",
        icon: "/src/assets/icons/linuxIcon.svg",
        url: "https://www.linux.org/",
      },
      rabbitmq: {
        name: "RabbitMQ",
        icon: "/src/assets/icons/rabbitmqIcon.svg",
        url: "https://www.rabbitmq.com/",
      },
      redis: {
        name: "Redis",
        icon: "/src/assets/icons/redisIcon.svg",
        url: "https://redis.io/",
      },
    },
  },

  socials: {
    // twitter: "https://twitter.com/mehdimerkachi",
    github: "https://github.com/Mmehdi06",
    linkedin: "https://linkedin.com/in/mehdimerkachi",
  },
  projects: {
    "This Website": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["Astro", "TypeScript", "TailwindCSS"],
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
