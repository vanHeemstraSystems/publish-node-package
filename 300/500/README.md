# 500 - Pushing to GitHub

Now that we have some work done locally, let's go ahead and commit this up to GitHub so that we can save our work. 

If we type in:

 ```
 $ git status
 ``` 
 
 we're going to have a couple of things in here.

One of those is this node_modules directory. It's not advisable to commit your node_modules directory for several reasons. One of these is collaborating with other users. Another is messing up your Git history with a lot of unnecessary changes that you may or may not actually want in your Git history.

We're going to use NPM to make sure that we have our dependencies properly locally, and we will gitignore our node-modules. Let's create a new file here, called ```.gitignore```, and this will tell Git to ignore certain directories or files in our project.

```
node_modules
```
.gitignore

We have added "node_modules" to .gitignore and, now, if we type ```git status``` those node modules are no longer there. 

=== WE ARE HERE ===

Now, we have this .gitignore file, which is just fine. What we need to do here, just as it illustrates for us, is we need to add these untracked files.

[01:05] We'll say "git-add." We'll just say -A to add everything. Now, if we say "git-status," it says we have a few new files, and we can commit these to our repository.

[01:17] We'll simply say "git-commit," and, then, we'll add a message of "adding the library." Now, if we say "git-status," we have one commit ahead of our origin master. We can git-push, and that will update our origin master.

[01:36] Now, if we go to our Star Wars Names repository, we have a source directory, a git-ignore, and a package JSON, everything that we need for our library to actually be published and used by consumers. However, we don't want to force people to go to our repository, go to the source directory, open up the index, copy this.

[01:58] This isn't something that we want people to do. We want them to be able to install our library from NPM. Next, we're going to publish this library to NPM.

[02:10] In review, all that we needed to do was create a .gitignore file that specified node_modules as an ignored directory. Then, we said, "git-add" to add the untracked files, the new files that we created. Then we have a git-commit to commit these files to our repository. Finally, we pushed these up to the GitHub repository.