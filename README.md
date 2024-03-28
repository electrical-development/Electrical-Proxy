# Ultraviolet Template
A template for creating your own Ultraviolet proxy. It has all the files for you to get up and running right away.

### Usage
This repository can be hosted on any static host, such as GitHub Pages, Vercel, Netlify, etc. The one thing you might need to replace is a [**Bare server**](https://github.com/tomphttp/bare-server-node). This is a Node.js (or other language) server that must be hosted for the proxy to work. It is not deployable on static server hostings. By default, this repository uses https://tomp.app.

To change the Bare server, clone the repository and edit the `uv/uv.config.js` file. There is a property marked by a comment that can be changed to your Bare server if desired.

There have been comments placed throughout the code to attempt to help people who are new to coding better understand the inner workings of a proxy website and how they function.

### Credits
This repository uses Ultraviolet as the main proxy, which was created by Titanium Network. The frontend design was also inspired by their official demo page.

I wrote the styles and JavaScript for the frontend.

The AGPL-3 license is used on this repository. This means you must disclose the original source when making changes or redistributing. The best way to do this is not to remove or change the footer on the website. It's good to provide credit to the people who provided the software for you.

### Support
For support, please do not contact Titanium Network, they most likely will not help you. Instead, [open an issue](https://github.com/proudparrot2/ultraviolet/issues/new).

You can also join my [Discord server](https://discord.gg/desmos) or DM me on Discord `@proudparrot2`.
