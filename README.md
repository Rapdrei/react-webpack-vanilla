## Motivation

This is a simple boilerplate for the use of React.JS, webpack and babel.
The boilerplate includes an webpack-dev-server which can transpile scss,
jsx?$ (EC6 -> EC5).

## Installation

For the boilerplate to work please install latest nodejs and npm version.

To install all the dependecies run `npm install`

To run the webpack-dev-server: `npm run devserver`

To build the project: `npm run build`

To clean the bin directory: `npm run clean`

The build files get minified and bundled in the ./bin/ directory. This directory
is also the mount point for the webpack-dev-server.

For customizing your webpack go to webpack.config.js and add/remove loaders or
plugins. You will also find a documentation in the source code.

All the project dependencies can be seen in package.json.

To extend your React App you can create or change components in
./src/components/ . By default the first component invoked in the body tag
of the index.html is the Interface component.
Ill post another boilerplate in my github for multipage support and one for
Redux.

## Contributors

If you have any suggestions please open an issue, any feedback is apreciated.
If you are interested in contributing to this boilerplate please drop me an
email at gdennis91@googlemail.com

## License

A short snippet describing the license (MIT, Apache, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.
