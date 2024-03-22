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
    [name: string]: {
      name: string;
      url: string;
      icon: string;
    };
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
        icon: "/src/assets/icons/java.svg",
        url: "https://www.java.com/",
      },
      cSharp: {
        name: "C#",
        icon: "/src/assets/icons/csharp.svg",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      },
      javascript: {
        name: "Javascript",
        icon: "/src/assets/icons/javascript.svg",
        url: "https://w3schools.com/js/",
      },
      typescript: {
        name: "TypeScript",
        icon: "/src/assets/icons/typescript.svg",
        url: "https://www.typescriptlang.org/",
      },
      python: {
        name: "Python",
        icon: "/src/assets/icons/python.svg",
        url: "https://www.python.org/",
      },
      php: {
        name: "PHP",
        icon: "/src/assets/icons/php.svg",
        url: "https://www.php.net/",
      },
      html: {
        name: "HTML",
        icon: "/src/assets/icons/html.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      css: {
        name: "CSS",
        icon: "/src/assets/icons/css.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    },
    Frontend: {
      react: {
        name: "React",
        icon: "/src/assets/icons/react.svg",
        url: "https://reactjs.org/",
      },
      solidjs: {
        name: "SolidJS",
        icon: "/src/assets/icons/solidjs.svg",
        url: "https://solidjs.com/",
      },
      astro: {
        name: "Astro",
        icon: "/src/assets/icons/astro.svg",
        url: "https://astro.build/",
      },
    },
    Backend: {
      nodejs: {
        name: "Node.js",
        icon: "/src/assets/icons/nodejs.svg",
        url: "https://nodejs.org/",
      },
      laravel: {
        name: "Laravel",
        icon: "/src/assets/icons/laravel.svg",
        url: "https://laravel.com/",
      },
      adonisjs: {
        name: "AdonisJS",
        icon: "/src/assets/icons/adonisjs.svg",
        url: "https://adonisjs.com/",
      },
      dotnet: {
        name: ".NET",
        icon: "/src/assets/icons/dotnet.svg",
        url: "https://dotnet.microsoft.com/",
      },
      springBoot: {
        name: "Spring Boot",
        icon: "/src/assets/icons/springboot.svg",
        url: "https://spring.io/projects/spring-boot",
      },
    },
    Extras: {
      tailwindcss: {
        name: "TailwindCSS",
        icon: "/src/assets/icons/tailwindcss.svg",
        url: "https://tailwindcss.com/",
      },
      git: {
        name: "Git",
        icon: "/src/assets/icons/git.svg",
        url: "https://git-scm.com/",
      },
      docker: {
        name: "Docker",
        icon: "/src/assets/icons/docker.svg",
        url: "https://www.docker.com/",
      },
      linux: {
        name: "Linux",
        icon: "/src/assets/icons/linux.svg",
        url: "https://www.linux.org/",
      },
      rabbitmq: {
        name: "RabbitMQ",
        icon: "/src/assets/icons/rabbitmq.svg",
        url: "https://www.rabbitmq.com/",
      },
      redis: {
        name: "Redis",
        icon: "/src/assets/icons/redis.svg",
        url: "https://redis.io/",
      },
    },
  },

  socials: {
    githubObject: {
      name: "GitHub",
      url: "https://github.com/Mmehdi06",
      icon: "/src/assets/icons/github.svg",
    },
    linkedinObject: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mehdimerkachi",
      icon: "/src/assets/icons/linkedin.svg",
    },
  },
  projects: {
    "This Website": {
      url: "https://github.com/Mmehdi06/portfolio_mehdi",
      tags: ["Astro", "TypeScript", "TailwindCSS"],
    },
  },
  og: {
    image: icon.src, // Make sure icon.src is properly defined elsewhere in your code
  },
};
