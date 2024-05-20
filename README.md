# My Blog

Welcome to my blog repository! This project is built with Gatsby and utilizes Netlify CMS for content management.

[![Netlify Status](https://api.netlify.com/api/v1/badges/19e0c2c9-8d56-48dc-9cb4-5372a322b8b0/deploy-status)](https://app.netlify.com/sites/azevedodev/deploys)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains the source code for a blog built with Gatsby, a fast and modern static site generator. The content is managed with Netlify CMS, an open-source content management system for static site generators.

## Features

- **Gatsby**: A React-based framework for building performant websites.
- **Netlify CMS**: An open-source CMS for managing site content.
- **Markdown Support**: Write posts and pages in Markdown.
- **Responsive Design**: Mobile-first design for optimal viewing on any device.
- **SEO Friendly**: Pre-configured SEO settings.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-1/#gatsby-cli)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/azevedo-pedro/my-personal-blog.git
   cd my-personal-blog
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

### Running the Development Server

Start the development server to see your site in action:
```sh
gatsby develop

or

npm start
```

Open your browser and navigate to `http://localhost:8000` to view the site.

To access the Netlify CMS admin panel, go to `http://localhost:8000/admin`.

## Deployment

This site is pre-configured to be deployed on [Netlify](https://www.netlify.com/). Follow these steps to deploy:

1. **Push your repository to GitHub**.
2. **Login to Netlify** and create a new site from Git.
3. **Select your repository** and follow the prompts.
4. **Configure build settings**:
   - Build Command: `gatsby build`
   - Publish Directory: `public`

Netlify will automatically build and deploy your site whenever you push changes to your repository.

## Customization

### Adding New Posts

To add a new blog post, navigate to the `/content/blog` directory and create a new Markdown file with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post"
---

Your post content goes here.
```

### Customizing the Theme

Modify the theme and layout by editing the components and CSS files in the `/src` directory.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes proper documentation.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Feel free to reach out if you have any questions or need further assistance!

Happy coding! 🚀