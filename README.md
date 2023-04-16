# openemu.github.io | openemu.org

- [x] [11ty](https://11ty.dev)
- [x] [Twind](https://twind.style)
- [x] [Alpine.js](https://alpinejs.dev)
- [x] [esbuild](https://esbuild.github.io)

Site is built with [11ty](https://11ty.dev) and deploys to 100% static files via GitHub pages.

> DO NOT EDIT FILES IN THE `gh-pages` BRANCH!!!  
> That branch gets auto generated/deployed when you push a commit in the main/master

***
### :floppy_disk: Local install
- Make sure you have node.js installed on your local machine
- Clone this repo
- Open the resulting folder in a terminal
- `npm install`
- `npm start`
- Open the url that the terminal give you. Normally it's http://localhost:8080/ but it could be different if you have multiple sites running at once

Now you can make changes and see the results before you commit said changes.

***
### :pencil2: Updating

All of the "data" is stored in `.yaml` files located in `./_site/_data/`. Simply commit and push your changes to trigger a build and deploy.

***
### :memo: Posting news

- Create a `.md` file in `./_site/news/`
  - File name form should be `YYYY-MM-slug`
- Use fronmatter at the top of the file:
```md
---
title: My news post
poster: https://optional-path-to-img.jpg
date: YYYY-MM-DD
---

Here's _my_ **amazing** news/blog post. {.text-center}
```
- `title:` = Post title 
- `poster:` = Optional image, remove this line if you don;t have an image
- `date:` = Required date field used to sort posts correctly, this must be in `YYYY-MM-DD` format

Then just write your news/blog post in normal markdown. You can also use [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) to apply [Twind](https://twind.style) classes or other accessible attributes.

***
### :speaking_head: Language voice

- News/Blog titles should be sentence case.
  - Don't Write Your Title Like This
  - Do write your title like this
- Don't use a period at the end of your news/blog title.
- If you need to use a heading, only use `## Heading title` for accessibility reasons.
- More to come...

***
### :timer_clock: Changes

**04/30/2023**

* 11ty re-write
* News section

**05/17/2019**

* Removed build requirement
* Switched to Twind css-in-js

**03/07/2019**

* Decompressed the HTML output
* Added a true asset pipeline so future HTML/CSS/JS revisions will not require a cache flush or hard refresh from the user
* Removed the BrowserSync option since it is not compatible with an asset pipeline. Now you will have to manually click refresh in your browser when developing/testing locally

**09/03/2018**  

* Complete rewrite
* Assets now fully compressed
* CSS is now responsive and functional using TailwindCSS
* Most data is templated via Vue.js
* Now uses a gulp build process (which includes a mini web server that auto reloads as you edit the CSS, JS, HTML)