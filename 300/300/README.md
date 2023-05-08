# 300 - Configuring npm and creating a package.json

Based on "Configuring npm and creating a package.json" at https://egghead.io/lessons/javascript-configuring-npm-and-creating-a-package-json

In this lesson, you'll learn how to set up your machine to publish to npm so people can install your library. You'll configure some helpful defaults and use those to create a ```package.json``` file for your project using ```npm init```.

Now that we have our GitHub repo set up, let's go ahead and configure some things locally for npm to make publishing a little bit easier.

Before I get started, one thing that you're going to need to make sure that you do is install Node. If you just search for Node.js, go to nodejs.org, you can install it here. Follow those prompts. If you type in npm --version and you don't get a version printed out, then you need to install Node. If you do, then you're just fine.

Let's go ahead and go to https://docs.npmjs.com. We'll go down to config. Here there are a ton of configuration options. We're interested in only a few of these, so we'll look for init. Here are the properties that we're interested in setting. The init author name, email, url, and license.

To set these properties, we simply type ```npm set``` and then the name of the property. init-author-name, and then type in your name. 

```
npm set init-author-name 'Willem van Heemstra'
```

We'll do the same for init-author-email and init-author-url, and npm set init license is MIT.

```
npm set init-author-email 'wvanheemstra@icloud.com'
```

```
npm set init-author-url 'https://github.com/vanHeemstraSystems'
```

```
npm set init-license 'MIT'
```

Let's go ahead and take a look at the ```.npmrc``` file that was created for us. 

```
init-author-name=Willem van Heemstra
init-author-email=wvanheemstra@icloud.com
init-author-url=https://github.com/vanHeemstraSystems/
init-license=MIT
```
.npmrc

We have the author name, email, url, and license. One other property that I recommend setting is the save-exact property. Save-exact tells npm that whenever it is saving a dependency to your package.json, it will use the exact version rather than a version range.

```
npm set save-exact true
```

```
init-author-name=Willem van Heemstra
init-author-email=wvanheemstra@icloud.com
init-author-url=https://github.com/vanHeemstraSystems/
init-license=MIT
save-exact=true
```
.npmrc

This protects you for when people don't follow semver properly or if there's a mistake in a release. This makes upgrading your dependencies full of fewer surprises. We're going to configure this default as well. npm set ```save-exact``` to true. Now we have that save-exact.

The last thing we need to do is we need to log in. If you don't have an npm account, then you need to sign up for one here at [npmjs.com](https://www.npmjs.com). I'm logged in, but if you go and you're not logged in, you don't have an account, you simply go to sign up and fill in this form.

Then you can go to your terminal and run npm add-user. 

```
$ npm adduser
```

It will prompt you for your username, your password, and your email. This will be used to create your auth token and your npm RC, which I'm not going to show to you.

Now that we have our npm configured we can created our package.json using ```npm init```. 

```
$ npm init
```

This will walk you through creating your package.json. It has some logical defaults, and we can follow through with this.

The name of our module, ```publish-node-package```, is just fine. Click ENTER to accept the default value.

The version, 1.0.0 is also OK, hence click ENTER again.

Our description we'll just say ```Publish a Node Package.``` and click ENTER.

The entry point is what is used when you require a module by its name, so require('publish-node-package'). If we say ```index.js``` is our entry point, then we need to create an index.js in our root directory. When people require 'publish-node-package', that's the file that we resolved for that required statement.

We're going to actually put a index.js file into our source directory (src).

```
entry point (index.js): src/index.js 
```

And then our test command we'll leave blank because we'll add tests later. So, just click ENTER.

We'll go ahead with our current git repository, so type ```git repository: https://github.com/vanHeemstraSystems/publish-node-package`` and click ENTER.

And we'll say publish node package for our keywords. 

```
keywords: publish node package
```

Our license is defaulted to MIT, so just click ENTER.

```
license: MIT
```

You will be prompted with a summary of your new to be created package.json, like so:

```
{
  "name": "publish-node-package",
  "version": "1.0.0",
  "description": "Publish a Node Package.",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vanHeemstraSystems/publish-node-package.git"
  },
  "keywords": [
    "publish",
    "node",
    "package"
  ],
  "author": "Willem van Heemstra <wvanheemstra@icloud.com> (https://github.com/vanHeemstraSystems/)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/vanHeemstraSystems/publish-node-package/issues"
  },
  "homepage": "https://github.com/vanHeemstraSystems/publish-node-package#readme"
}
```

Let's go ahead and say yes, by clicking ENTER. 

```
Is this OK? (yes)
```

If we look at our package.json, you'll notice we have our name, our version, a description, our main pointing to ```src/index.js```. We don't have a test command yet. We'll fill that in later. 

The repository was filled in for us. The keywords were filled in. The author is prefilled based off of our init defaults, and license likewise. Our bugs and home page are derived from the repository that we specified.

That is how you set up your npm locally and initialize your package. You simply sign up for an account on npm, set a couple of configuration properties to make creating this package.json a little easier, run npm init, and follow through the prompt.