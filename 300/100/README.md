# 100 - Introduction to How to Write an Open Source JavaScript Library

Based on "Introduction to How to Write an Open Source JavaScript Library" at https://egghead.io/lessons/javascript-introduction-to-how-to-write-an-open-source-javascript-library

Hello. We're going to create a micro library from start to finish, everything that we need to get this library up and running. They're a few benefits to creating a micro library in particular. First, because it's so small, it's easy to reason about the code, because there's not much there. Second, also because it's small it's really easy to test, because there's not that much code that needs to be tested anyway. Third, it's easy to re-use this code in other projects because you can simply NPM install it, and you're good to go.

There are a few drawbacks to micro libraries, though. Some people complain about how it makes managing these dependencies a little bit more tricky, because you have so many of them, it makes versioning a little bit more tricky as well. But all in all, micro libraries are a good solution for many use cases, so that's why we're building one now. Finally, even though we're technically building a micro library in this series, the principals that you learn in this series can apply to micro libraries or huge libraries alike.

Our micro library is called "Star Wars Names." We have a list of Star Wars names, about a hundred here, and we're going to enable users to call into our library, get this whole list, or get a random item from this list with a simple public API.

In this series we're going to learn how to create a Git repository, hosted on GitHub, create the library, publish it to NPM, create a full test suite for it using Karma, Mocha, and Chai, set up continuous integration, add ES6 or ES2015 using Babel, integrate webpack, and ultimately distribute this in a form that is consumable by both the browser and node. Enjoy this series.
