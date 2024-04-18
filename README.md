# My Portfolio

This is the repository for my personal portfolio, which showcases my skills, projects, and career experiences.

## Technology Stack

-  **Astro**: A modern front-end framework for faster websites. It allows us to build fast, optimized websites and provides a seamless developer experience.
-  **Fly.io**: An application hosting service that provides secure, scalable hosting for our portfolio.

## Getting Started

Follow the steps below to get this project up and running on your machine:

### Prerequisites

This project requires Node.js to run. Make sure it's installed on your machine. If not, download it [here](https://nodejs.org/en/download/).

### Installation

1. Firstly, clone this repository. Open your terminal and type:
    ```bash
    git clone https://github.com/your_username/portfolio.git
    ```
2. Move to the project directory:
    ```bash
    cd portfolio
    ```
3. Install the dependencies using npm:
    ```bash
    npm install
    ```

### Run Locally

Start the development server:
```bash
npm run dev
```
The application is now running at http://localhost:5000.

## Deployment

The project is deployed on [Fly.io](https://fly.io/). Fly.io is a powerful platform for application hosting that provides a global deployment pipeline with an intuitive user interface.

### Steps for Deployment

Your Portfolio's deployment is automated using continuous integration. Here's an overview of how it's set up:

1. **GitHub**: The main codebase is hosted in a GitHub repository.

2. **GitHub Actions (CI/CD)**: GitHub Actions has been set to automate the testing and deployment process. Upon each new push to the main branch, it will invoke the necessary steps for building the Astro application and then deploying it to Fly.io.

See `.github/workflows/fly.yml` for more information on the CI/CD setup.

3. **Fly.io**: After successful build, the built assets are deployed to Fly.io. 

You can view the live version of the site [here](https://mehdi-merkachi.dev).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

