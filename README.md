# Clicky-Game

## Deployed Project

https://sgliput.github.io/react-gh-pages/

## Overview

This Clicky game is a React app deployed on GitHub Pages, styled with Bootstrap, and utilizing the following NPM/Yarn packages:

* react
* react-dom
* react-scripts
* underscore

## Gameplay

Upon loading, the app presents rows of fifteen various images from Tom Hanks movies. Clicking on one of these images increases the counter at the top by one and causes the images to be rearranged randomly (using the underscore.js library's _.shuffle function). If an image is clicked more than once, the counter is returned to zero, starting the game over. The counter is fixed and scrolls with the page to ensure the player knows their score. If the player succeeds in clicking all fifteen images only once, a modal appears to congratulate them and offer a further fun challenge in Level 2.

In Level 2, each image has an input field beneath it, where the player must type in the name of the film the image is from. The shuffling is disabled, and the counter is not in a fixed position and does not scroll with the page as before. When a player types into each input, the field is surrounded by a red border, which turns green when the answer is correct. The answers are not case-sensitive. When all fifteen films are named correctly, another congratulations modal appears with a button to start the game over.

## Behind the Scenes

The following page elements are components:

* Header
* Picture (reused for all fifteen images)
* Modal
* App (which functions as the container for the others)

The list of films is kept in the hanks.json file. After this array of movie information is added to the App's state, a map function renders each film as a Bootstrap card with event handlers for shuffling the images upon a click and confirming the input field's value (in Level 2). These event handlers are fed to the Picture component through props, as is the count.

Also kept in the state are keys for setting when the modals are revealed and closed, keeping track of which images have been clicked and which Level 2 input values are correct, and changing the display property of the counter (whether fixed in Level 1 or absolute in Level 2).
