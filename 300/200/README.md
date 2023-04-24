# 200 - Setting up GitHub

Based on "Setting up GitHub" at https://egghead.io/lessons/javascript-setting-up-github

In this lesson, you'll learn how to set up a GitHub account, create a new GitHub repository, and connect your local project with that new repository so you have a place to store and collaborate on your library code.

[00:00] The first thing that we're going to want to do is create a GitHub repo for this library. We'll go to our browser and go to GitHub.com. If you don't have an account, you can sign up here.

[00:11] I do have an account, so I'll just sign in. Then, we'll go ahead and create a new repository. We'll call it "publish-node-package", or name it just the name of your library, and we'll write the description as "Publish Node Package." We'll go ahead and create the repository.

https://github.com/vanHeemstraSystems/publish-node-package

[00:33] I'm just going to go ahead and copy this to the clipboard, and we'll paste it in. 

```
echo "# publish-node-package" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:vanHeemstraSystems/publish-node-package.git
git push -u origin main
```

It'll run several of those commands and, then, we're ready to push.

[00:42] Just to explain what this actually does is it creates a new file called "readme.md," and adds "Star Wars Names" to the top. Then, it initializes the Git repository locally. We add the .readme that we just created.

[00:57] We commit with the message "first commit." We add the remote origin so, this repository. Then, we push it to master setting our upstream.

[01:07] If I refresh the browser, now, now we have our Star Wars Names and we have the .readme. We're all ready to go with a GitHub repository, and this is where we're going to be hosting our code and pushing our code.

[01:19] In review, you need to create a GitHub user. You create a new repository. Then, you follow the instructions to push your code to that repository. That's how you get started with GitHub.
