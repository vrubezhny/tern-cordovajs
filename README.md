tern-cordovajs
===========

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-cordovajs.png)](http://travis-ci.org/angelozerr/tern-cordovajs)
[![NPM version](https://img.shields.io/npm/v/tern-cordovajs.svg)](https://www.npmjs.org/package/tern-cordovajs)

[tern-cordovajs](https://github.com/vrubezhny/tern-cordovajs) is a plugin which adds support for [Apache Cordova(tm) JavaScript API](http://cordova.apache.org/) to the JavaSript code intelligence system [Tern](http://ternjs.net/).

## Demo

You can play with [online demo](http://demo-angelozerr.rhcloud.com/CodeMirror-Java/cordovajs.html) which uses CodeMirror ((inside Web Browser).

Here a screenshot with completion with CodeMorror CordovaJS completion :
 
![CodeMirror & TernCordovaJS](https://github.com/vrubezhny/tern-cordovajs/wiki/images/TernCordovaJSWithCodeMirror.png)

Here a screenshot with completion with Eclipse IDE CordovaJS completion :

![Eclipse & TernCordovaJS](https://github.com/vrubezhny/tern-cordovajs/wiki/images/TernCordovaJSWithEclipse.png)

If you wish to use Eclipse as IDE, see [Eclipse support for CordovaJS](https://github.com/angelozerr/tern.java/wiki/Tern-&-CordovaJS-support).

## <a name="installation"></a> Installation

tern-cordovajs works with the NodeJS [Tern Server](http://ternjs.net/doc/manual.html#server), and within a browser.

### Short version

After installing Tern according the setup instructions of your desired [editor
plugin](http://ternjs.net/doc/manual.html#editor), go to the place where the [Tern package](https://www.npmjs.org/package/tern) was
installed (or the [Tern repo](https://github.com/marijnh/tern) was cloned) and run

```
$ npm install tern-cordovajs
```
Or, if you're not sure where Tern was installed, you can try
```
$ npm install -g tern-cordovajs
```

### Long version

See [INSTALL.md](INSTALL.md) for instructions tailored to each editor.

## <a name="configuration"></a> Configuration

In order for Tern to load the tern-cordovajs plugin once it is installed, you must
include `cordovajs` in the `plugins` section of your [Tern configuration
file](http://ternjs.net/doc/manual.html#configuration). The configuration file can be either a file named
`.tern-project` in your project's root directory, or `.tern-config` in your home
directory.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "ecmaVersion": 5,
  "plugins": {
    "cordovajs": {}
  }
}
```

<a name="project-dir"></a>
#### "Project directory" and `.tern-project` vs `.tern-config`

Tern looks for `.tern-project` first, walking up the directory tree, and uses
its location as the "project directory". If no `.tern-project` is found, your
`.tern-config` is loaded instead, and *the working directory of the Tern server
process is used as the "project directory"*.

## Structure

The basic structure of the project is given in the following way:

* `cordovajs.js` the tern plugin.
* `demos/` demos with CordovaJS tern plugin which use CodeMirror.
* `test` test of the tern plugin.