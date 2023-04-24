# 300 - Configuring npm and creating a package.json

Based on "Configuring npm and creating a package.json" at https://egghead.io/lessons/javascript-configuring-npm-and-creating-a-package-json

In this lesson, you'll learn how to set up your machine to publish to npm so people can install your library. You'll configure some helpful defaults and use those to create a ```package.json``` file for your project using ```npm init```.

[00:01] Now that we have our GitHub repo set up, let's go ahead and configure some things locally for npm to make publishing a little bit easier.

[00:08] Before I get started, one thing that you're going to need to make sure that you do is install Node. If you just search for Node.js, go to nodejs.org, you can install it here. Follow those prompts. If you type in npm--version and you don't get a version printed out, then you need to install Node. If you do, then you're just fine.

[00:31] Let's go ahead and go to docs.npmjs.com. We'll go down to config. Here there are a ton of configuration options. We're interested in only a few of these, so we'll look for init. Here are the properties that we're interested in setting. The init author name, email, url, and license.

[00:52] To set these properties, we simply type npmset and then the name of the property. init-author-name, and then type in your name. We'll do the same for init-author-email and init-author-url, and npm set init.license is MIT.

[01:30] Let's go ahead and take a look at the npm RC file that was created for us. We have the author name, email, url, and license. One other property that I recommend setting is the save-exact property. Save-exact tells npm that whenever it is saving a dependency to your package.json, it will use the exact version rather than a version range.

[01:54] This protects you for when people don't follow semver properly or if there's a mistake in a release. This makes upgrading your dependencies full of fewer surprises. We're going to configure this default as well. npm set save-exact to true.

[02:13] Now we have that save-exact, the last thing we need to do is we need to log in. If you don't have an npm account, then you need to sign up for one here at npmjs.com. I'm logged in, but if you go and you're not logged in, you don't have an account, you simply go to sign up and fill in this form.

[02:36] Then you can go to your terminal and run npm add-user. It will prompt you for your username, your password, and your email. This will be used to create your auth token and your npm RC, which I'm not going to show to you.

[02:57] Now that we have our npm configured we can created our package.json using npm init. This will walk you through creating your package.json. It has some logical defaults, and we can follow through with this.

[03:13] The name of our module, Star Wars Names, is just fine. The version, 1.00Our description we'll just say get random Star Wars names. The entry point is what is used when you require a module by its name, so Star Wars names. If we say index.js is our entry point, then we need to create an index.js in our root directory. When people require Star Wars Names, that's the file that we resolved for that required statement.

[03:47] We're going to actually put it into our source/index.js, and then our test command we'll leave blank because we'll add tests later. We'll go ahead with the default for our git repository, and we'll say random Star Wars for our keywords. Our license is defaulted to MIT.

[04:07] Let's go ahead and say yes. If we look at our package.json, you'll notice we have our name, our version description, our main pointing to sourceindex.js. We don't have a test command yet. We'll fill that in later. The repository was filled in for us. The keywords were filled in. The author is prefilled based off of our init defaults, and license likewise. Our bugs and home page are derived from the repository that we specified.

[04:41] That is how you set up your npm locally and initialize your package. You simply sign up for an account on npm, set a couple of configuration properties to make creating this package.json a little easier, run npm in it, and follow through the prompt.
