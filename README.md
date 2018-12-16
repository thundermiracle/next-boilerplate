# next-boilerplate

## Description

Simple boilerplate of next.js.
With material-ui, google analytics, customized export, a simple layout and module-resolver support. And the newest version of babel7 is imported.
You could deploy it to github pages by travis easily as well.

The project mainly uses [nextjs](https://github.com/zeit/next.js/), [material-ui](https://github.com/mui-org/material-ui) and [next-mui-helper](https://github.com/thundermiracle/next-mui-helper).

## Sample github page:

[https://thundermiracle.github.io/next-biolerplate](https://thundermiracle.github.io/next-biolerplate)

## Settings

+ material-ui's theme

      src/client/views/styles/theme.js

+ Google Analytics

      config/client.js.

+ Customize export

  next.js can export your code to static html which is very easy to deploy. With next.js' default export function, you cannot select which page to include or exclude, but you can do it in this boilerplate.

        src/client/PathMap.js
        src/next.config.js

+ Layout injection

      src/_app.js

+ Module resolve

      .babelrc
      jsconfig.json

+ Deploy to github-pages or into sub folder

      config/client.js [subfolder: true]


## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
