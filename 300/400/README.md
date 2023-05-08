# 400 - Creating the library and adding dependencies

Based on "Creating the library and adding dependencies" at https://egghead.io/lessons/javascript-creating-the-library-and-adding-dependencies

With our NPM configured and our Package JSON created, we are ready to start writing this library.


We need to create our main file for our library. We're going to create a source / index.js. I create a file in a source directory called index.js. 

```
$ touch src/index.js
```

This is where the main export for our library will live. 

When we add ```module.exports = {};``` to src/index.js as common js syntax, this is the object that will be exported when people require our module.

```
module.exports = {};
```
src/index.js

We're going to have two **public API points** on our module. 

First, we'll have ```all``` and then ```random```. 

```
module.exports = {
    all,
    random
};
```
src/index.js

These properties will be used to interact with our module. 

For demonstration purposes of a functional module, create a file called ```starwars-names.json``` in the same directory ```src ```:

```
[
  "4-LOM",
  "Aayla Secura",
  "Admiral Ackbar",
  "Admiral Thrawn",
  "Ahsoka Tano",
  "Anakin Solo",
  "Asajj Ventress",
  "Aurra Sing",
  "Senator Bail Organa",
  "Barriss Offee",
  "Bastila Shan",
  "Ben Skywalker",
  "Bib Fortuna",
  "Biggs Darklighter",
  "Boba Fett",
  "Bossk",
  "Brakiss",
  "C-3PO",
  "Cad Bane",
  "Cade Skywalker",
  "Callista Ming",
  "Captain Rex",
  "Carnor Jax",
  "Chewbacca",
  "Clone Commander Cody",
  "Count Dooku",
  "Darth Bane",
  "Darth Krayt",
  "Darth Maul",
  "Darth Nihilus",
  "Darth Vader",
  "Dash Rendar",
  "Dengar",
  "Durge",
  "Emperor Palpatine",
  "Exar Kun",
  "Galen Marek",
  "General Crix Madine",
  "General Dodonna",
  "General Grievous",
  "General Veers",
  "Gilad Pellaeon",
  "Grand Moff Tarkin",
  "Greedo",
  "Han Solo",
  "IG 88",
  "Jabba The Hutt",
  "Jacen Solo",
  "Jaina Solo",
  "Jango Fett",
  "Jarael",
  "Jerec",
  "Joruus C'Baoth",
  "Ki-Adi-Mundi",
  "Kir Kanos",
  "Kit Fisto",
  "Kyle Katarn",
  "Kyp Durron",
  "Lando Calrissian",
  "Luke Skywalker",
  "Luminara Unduli",
  "Lumiya",
  "Mace Windu",
  "Mara Jade",
  "Mission Vao",
  "Natasi Daala",
  "Nom Anor",
  "Obi-Wan Kenobi",
  "Padmé Amidala",
  "Plo Koon",
  "Pre Vizsla",
  "Prince Xizor",
  "Princess Leia",
  "PROXY",
  "Qui-Gon Jinn",
  "Quinlan Vos",
  "R2-D2",
  "Rahm Kota",
  "Revan",
  "Satele Shan",
  "Savage Opress",
  "Sebulba",
  "Shaak Ti",
  "Shmi Skywalker",
  "Talon Karrde",
  "Ulic Qel-Droma",
  "Visas Marr",
  "Watto",
  "Wedge Antilles",
  "Yoda",
  "Zam Wesell",
  "Zayne Carrick",
  "Zuckuss"
]
```
src/starwars-names.json

The idea is that we want to have Star Wars names (see ```src/starwars-names.json```) exported as part of the all, and we'll have a function that you can call to get a random Star Wars name.



We're going to require those Star Wars names to get the object that we need. We'll simply say, 

```
var starWarsNames = require ('./starwars-names.json');

module.exports = {
    all,
    random
};
```
src/index.js

This will create a JavaScript object for us. 

We can simply assign that to the ```all``` property.

```
var starWarsNames = require ('./starwars-names.json');

module.exports = {
    all: starWarsNames,
    random
};
```
src/index.js



=== WE ARE HERE ===

[01:28] For ```random``` we need to create a function that will get a random item from this array. This is a solved problem. Instead of taking some time to figure out how to write this properly and then making sure that I cover it with tests properly, I'm going to use a micro library that has already done this.

[01:48] We're going to say MPM install--save to save this dependency to our package JSON. Then the dependency is called "unique random array." Once that's installed it will be added as a note module right here. It will be added to our package JSON as well because we have the --save there. It's added as a dependency.

[02:14] Because we earlier configured our NPM to use save exact by default, we are saving the exact version here. We won't be surprised when somebody accidentally releases a breaking change. Let's go ahead and use this module. We'll say "/unique random array equals require unique random array."

[02:42] All that we need to do is say unique random array and pass our array. That will return us a function that we can call to get a random item from that array. If we want to manually test this really quick we can go into the node ripple. We can say var lib equals require source/index.js. Now we can say lib.all and there are all of our random names.

[03:09] We can say lib.random and invoke that over and over again, and we get a random Star Wars name every time. It looks like from our manual testing that our library is working like we want it to. We're ready to commit these changes that we have and push them up to GitHub.

[03:28] Before we do that, let's go ahead and review what we did. First, we created our index.js file that had our library in it. We moved the Star Wars names to the source directory right next to it. We brought that in. We exported it an all object, and this is what's going to be used when people require our module.

[03:48] We also created a random property. We're using a third party library to accomplish this. We installed this by saying MPM install--save unique random array. Just as a pro tip, there's a shortcut for this. We can say MPMI-S and that is the exact same as MPM install--save.

[04:08] You can also install multiple dependencies in a single command by listing the dependencies here. By adding save, it's saved our dependencies to our package JSON. We have configured our NPM to save exact by default, it's saved our dependency with the exact version, rather than having a caret or a tilde for our version.

[04:36] This protects us from surprises when somebody accidentally pushes a breaking change or does an honor sendver. That is how you create your first library.