# IgnoreGit

## Description
**IgnoreGit** is a web application designed to generate customized `.gitignore` files for various programming languages, libraries, and frameworks. By simply entering the desired language, users receive a tailored `.gitignore` file that helps keep their repositories organized.

## Technologies Used
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **shadcn/ui**: For reusable UI components.
- **LangChain**: For interfacing with the language model.
- **GROQ**: For hosting and querying the Llama model.
- **Llama 8B**: For powerful language processing capabilities.

## How It's Made
This application utilizes React for the frontend, complemented by Tailwind CSS and shadcn/ui for design. The core functionality leverages LangChain to interact with GROQ, which hosts the Llama 8B model, enabling the generation of `.gitignore` files based on user input.

## Live Demo
Visit the live version of IgnoreGit at [your-website-link.com](https://ignore-git.netlify.app/).

## Installation
To run this project locally, clone the repository and install the dependencies:
```bash
git clone https://github.com/yourusername/IgnoreGit.git
cd IgnoreGit
npm install
run dev