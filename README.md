# openemu.org

Site is built with [11ty](https://11ty.dev) and deploys to 100% static files.
### Updating

All of the "data" is stored in `.yaml` files located in `./_site/_data/`. Simply commit your changes to trigger a build and deploy.
### Posting News

- Create a `.md` file in `./_site/news/YYYY/MM/`
  - `YYYY` = post year in 4 digit year format
  - `MM` = post month in 2 digit month format
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

### Post writing patterns

- News/Blog titles should be sentence case.
  - Don't Write Your Title Like This
  - Do write your title like this
- Don't use a period at the end of your news/blog title.
- If you need to use a heading, only use `## Heading` or `H2` for accessibility reasons.
- More to come...

---

- [x] [11ty](https://11ty.dev)
- [x] [Twind](https://twind.style)
- [x] [Alpine.js](https://alpinejs.dev)
- [x] [esbuild](https://esbuild.github.io)