# Link Lerna Package Binaries

**A small tool built on top of [Lerna](https://lerna.js.org/) to link binaries offered by packages to root-level.**

Both Lerna and Yarn workspaces do not allow offering central used binaries to the root project. That is exactly what this tool is useful for. It links all binaries offered by _packages_ into the top-level `node_modules/.bin` folder to make them accessible even at root. This is e.g. useful when some of the packages are used by scripts on CI e.g. for publishing artifacts to some remote location.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2016-2019<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
