# Next + Contentful Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/e368a036-6f58-4f33-a414-473b23a3fd14/deploy-status)](https://app.netlify.com/sites/next-contentful-starter/deploys)

This is a [Next.js](https://nextjs.org/) v10.6.0 starter project with [Contentful](https://www.contentful.com/) and set up to be instantly deployed to [Netlify](https://url.netlify.com/Bk4UicocL)!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-contentful-starter&utm_source=github&utm_medium=nextcontentful-cs&utm_campaign=devex)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Add Contentful Access Tokens

You will need to add Contentful access tokens as global variables in Netlify to successfully deploy your site. After creating an account with Contentful, you can add these tokens by navigating to **Site settings > Build & deploy > Environment > Environment variables** and adding the following:

NEXT_PUBLIC_CONTENTFUL_SPACE_ID = [your contentful space id]
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN = [your contentful access token]

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-contentful-starter&utm_source=github&utm_medium=nextcontentful-cs&utm_campaign=devex)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/next-contentful-starter.git`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)
