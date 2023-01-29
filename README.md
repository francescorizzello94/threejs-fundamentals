# Three.js Fundamentals

This is the repo for my Three.js Fundamentals series published on my [YouTube channel](https://www.youtube.com/channel/UCJUzPxH0xLf7steekQucyxQ).

## Guiding principles

The setup for this repo follows a simple principle: it should be as beginner friendly as possible.

For this reason, I have chosen to avoid creating branches for every sub-repo so that when the main repo is cloned, the user immediately has access to all the existing sub-repos and does not have to worry about learning how to use git branch commands first.<br />
It is not the most efficient approach, but I believe it to be more conducive to an enjoyable learning experience for someone who wants to get started with three.js without having to worry about anything else apart from the code.

## Structure

The repo follows an approach structured around geometry types.<br />
The basic setup files for every geometry are not indexed (e.g. `boxgeometry`). <br /> The idea is that you may want to grab the folder and tinker with the code yourself and devise your own features. You are encouraged to follow along and learn from the further features I add to my code and compare them against your own, of course.<br />
Any further files pertaining to a basic geometry type are then indexed (e.g. `1_boxgeometry_dat.GUI`).

[This repo]() is the starting point for Box geometries.


<!-- GETTING STARTED -->
## Getting Started

To use this code on your machine, you will need to follow these simple steps:

### Installation

1. Click on the green "Code" button in the top right corner of the main [Threejs Fundamentals Repository](https://github.com/francescorizzello94/threejs-fundamentals)
2. Select SSH and copy the link
3. In your local terminal, use the command below (you could also just copy paste the command and it would still work, of course)
   ```sh
   git clone git@github.com:francescorizzello94/threejs-fundamentals.git
   ```
3. Install NPM packages
   ```sh
   npm i
   ```
   which is the same as
   
   ```sh
   npm install
   ```
4. Pull the latest updates to the repo to stay updated with any new sub-repos I may have added since cloning
   ```sh
   git pull
   ```
