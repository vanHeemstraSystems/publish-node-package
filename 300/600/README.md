# 600 - Publishing to npm

Based on "Publishing to npm" at https://egghead.io/lessons/javascript-publishing-to-npm

Now we're finally ready to publish our node module. We've already configured everything locally with NPM in a previous lesson, as well as in our package JSON with this metadata. 

All that really needs to happen is to simply run npm publish. 

```
$ npm publish
```

You will be prompted like so:

```
npm notice 
npm notice 📦  publish-node-package@1.0.0
npm notice === Tarball Contents === 
npm notice 618B  100/README.md          
npm notice 45B   200/README.md          
npm notice 1.9kB 300/100/README.md      
npm notice 2.1kB 300/200/README.md      
npm notice 6.5kB 300/300/README.md      
npm notice 7.8kB 300/400/README.md      
npm notice 2.4kB 300/500/README.md      
npm notice 2.0kB 300/600/README.md      
npm notice 38B   300/700/README.md      
npm notice 39B   300/800/README.md      
npm notice 34B   300/900/README.md      
npm notice 53B   300/1000/README.md     
npm notice 42B   300/1100/README.md     
npm notice 51B   300/1200/README.md     
npm notice 54B   300/1300/README.md     
npm notice 50B   300/1400/README.md     
npm notice 47B   300/1500/README.md     
npm notice 64B   300/1600/README.md     
npm notice 54B   300/1700/README.md     
npm notice 39B   300/1800/README.md     
npm notice 37B   300/1900/README.md     
npm notice 38B   300/2000/README.md     
npm notice 28B   300/2100/README.md     
npm notice 59B   300/2200/README.md     
npm notice 40B   300/2300/README.md     
npm notice 46B   300/2400/README.md     
npm notice 2.0kB 300/README.md          
npm notice 19B   400/README.md          
npm notice 493B  README.md              
npm notice 772B  package.json           
npm notice 395B  src/index.js           
npm notice 1.8kB src/starwars-names.json
npm notice === Tarball Details === 
npm notice name:          publish-node-package                    
npm notice version:       1.0.0                                   
npm notice filename:      publish-node-package-1.0.0.tgz          
npm notice package size:  11.0 kB                                 
npm notice unpacked size: 29.5 kB                                 
npm notice shasum:        c45b95ec22f09fbbb821c11f6db4df27bb7e6eb6
npm notice integrity:     sha512-FSd2743yE9dIb[...]VC6NxGGfooA6w==
npm notice total files:   32                                      
npm notice 
npm notice Publishing to https://registry.npmjs.org/ with tag latest and default access
+ publish-node-package@1.0.0
```

This will go out to NPM, register our module in the registry, and then create the publish-node-package module.

Now we can run npm info publish-node-package. 

```
$ npm info publish-node-package
```

You'll notice this looks similar to our package JSON. 

```

publish-node-package@1.0.0 | MIT | deps: 1 | versions: 1
Publish a Node Package.
https://github.com/vanHeemstraSystems/publish-node-package#readme

keywords: publish, node, package

dist
.tarball: https://registry.npmjs.org/publish-node-package/-/publish-node-package-1.0.0.tgz
.shasum: c45b95ec22f09fbbb821c11f6db4df27bb7e6eb6
.integrity: sha512-FSd2743yE9dIb+fN34ffz/D6wDjzlIOVpqejFC4cUGYGTvwy/aVtuY7I8+Mp0vr1URE+IKuAAVC6NxGGfooA6w==
.unpackedSize: 29.5 kB

dependencies:
unique-random-array: 3.0.0 

maintainers:
- wvanheemstra <wvanheemstra@icloud.com>

dist-tags:
latest: 1.0.0  

published a minute ago by wvanheemstra <wvanheemstra@icloud.com>
```

This allows us to install our 1.0.0 version.

=== WE ARE HERE ===

[00:41] Let's go ahead and test this out a little bit. Let's just change our directory to the desktop, and then we'll run npm install starwars-names. This will install our module and our module's dependencies.

[00:58] Now, we can create a file that uses our Star Wars names, so we'll say vim index.js, and we'll insert a starwars-names require starwars-names, and then we'll console.log starwars-names.all. Then we'll console.log starwars-names.random, and we'll do that a few times.

[01:36] Now if we say node index.js, we get all those printed, and then our random items printed as well. If we run it again, the random ones are different every time. So it looks like we successfully published our first package to NPM. If we go to the NPM registry, we can shortcut to our module name with npm.im/starwars-names, and this will take us to our registry item.

[02:03] Here we have starwars-names, get random Star Wars names. Our readme could use a little bit of help, but it has a link to our starwars-names. It has our license here. It lists me as a collaborator, and other information about our module, such as our dependencies. That is publishing your first module to NPM.

[02:27] In review, all that you need to do is run npm publish. As long as you've configured your NPM with your user, then you should be all set.