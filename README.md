# jm.potvin.xyz

![](https://img.shields.io/badge/version-1.1.0-brightgreen?style=for-the-badge)

My personal website and blog. A small showcase of my web design and web development skills.

# How can it be accessed?

Through a modern browser. Just head to [jm.potvin.xyz](https://jm.potvin.xyz).

# License

You can always clone this repository. This is why I made it available on Github. I think it could eventually help other people in building small websites in NodeJS. It is not much, but if you feel it could help you, go for it!

## Restrictions

Everything stored in `./views`, `./public/files/` and in `./public/images/` is restricted. For these three folders, **all rights are reserved.**

* For the files stored in `./views`, you can reuse the markup (the structure of the files), but **never** the contents of the markup. The idea is that you **can** reuse the code, but **never** the personal information in it. This is **strictly** forbidden.
* The files stored in `./public/files/` and `./public/images/` are ignored by this repository. If you ever find them elsewhere, they can **never** be reused in any way.

> The idea is simple. Do **not** reuse, publish and/or modify my personal contents and information. Many thanks!

# How is it structured?

The structure is mostly inspired from the standard structure of `express` and `express-generator`. The website uses `express` as a web framework. Express works on NodeJS. The template engine is [EJS](https://ejs.co/) (Embedded JavaScript).

* The Express app itself is defined in `./index.js`.
* Routing mechanisms are stored in `./routes/`.
* The low-level script used to start the server is `./bin/www`.
* Views (EJS templates) are stored in `./views/`. HTML assets are rendered from them. One view represents one web page.

Usual public files are stored in `./public/`. Sub-folders are self-explanatory.

* Files and images are not publicly available.
* Only one stylesheet (`main.css`) is used for the whole website and all media.
* There is one main client-side JS script (`main.js`). The others scripts are specific to a route.

# Available `npm` scripts

The project is shipped with a couple of handy `npm` scripts. 

* `start` starts a server in regular non-verbose mode.
* `serverstart` starts a server in verbose mode. Activity will be logged into the console.
* `devstart` starts a server that watches for changes in JS-like files and restarts itself as soon as it detects one. This is useful when developing.
* `minifycss` will automatically create a minified CSS file named `main.min.css` from `main.css` and store this file in `./public/stylesheets/`.
* `minifynorm` will automatically create a minified CSS file named `normalize.min.css` from `normalize.css` and store this file in `./public/stylesheets/`. It uses a slightly altered version of `normalize.css` that is stored in the same location.

To use them, use command below.

```bash
npm run [SCRIPT-NAME]
```

# Metadata management

Routes leverage metadata that is stored in `./routes-metadata.json`. Each route in `./routes` gets a named entry in the metadata. The latter is an object having a structure illustrated by the example below.

```js
{
    "route": "home",
    "title": "JM Potvin | Home",
    "ogtitle": "jm.potvin.xyz | home page",
    "ogurl": "https://jm.potvin.xyz",
    "scripts": [
      { "src": "/javascripts/main.js", "defer": "defer" },
      { "src": "/javascripts/index.js", "defer": "defer" },
      { "src": "https://kit.fontawesome.com/1a9c86e038.js", "crossorigin": "anonymous" }
    ],
    "links": [
      { "rel": "preconnect", "href": "https://fonts.gstatic.com" },
      { "rel": "stylesheet", "media": "all", "href": "https://fonts.googleapis.com/" },
      { "rel": "stylesheet", "media": "all", "href": "/stylesheets/normalize.min.css" },
      { "rel": "stylesheet", "media": "all", "href": "/stylesheets/main.min.css" }
    ]
}
```

This metadata is used in EJS views. The arrays `scripts` and `links` hold internal and external files to be included in the `<head>` of the underlying view. They should hold objects, and these objects should hold key/value pairs of strings corresponding to HTML attributes. These are automatically parsed in a valid HTML string attribute by module `htmlattrstring`. Values that are not strings are not coerced, they are ignored and not included into the view.

## How to get `htmlattrstring`

Clone the [underlying repository](https://github.com/jeanmathieupotvin/htmlattrstring) into the `./lib/` folder. It should hold your private collection of modules not published on `npm`.

# Lighthouse reports

This website was designed to be **lightweight** and **performant** on **all** devices. I consistently scored 95+ results in the categories *Performance*, *Best Practices* and *SEO* on both desktop and mobile devices. Sadly, I have no knowledge on web accessiblity (*Accessibility*) and decided to ignore it for now. I plan to revisit this component later. The *Progressive Web App* category does not apply.

# Bugs and feedback

Submit them all [here](https://github.com/jeanmathieupotvin/jm.potvin.xyz/issues). Many thanks for your help, I appreciate it!
