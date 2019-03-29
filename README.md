![cf](http://i.imgur.com/7v5ASc8.png) Lab Submission Instructions
============================================================================
# 401n12-lab4
lab4

## Project Name
[![Build Status](https://travis-ci.com/Alwynblake/401n12-lab4.svg?branch=master)](https://travis-ci.com/Alwynblake/401n12-lab4)

https://travis-ci.com/Alwynblake/401n12-lab4

### Author: Alistair Blake

### Links and Resources
repo https://github.com/Alwynblake/401n12-lab4
https://travis-ci.com/Alwynblake/401n12-lab4
back-end
front-end https://lab4-401n12.herokuapp.com/
## Canvas Submission
* Link to the README.md in your lab repo
* **Code Sandbox Submissions**
  * Create a folder called `docs` (under `/public` for React apps)
  * Upload your README.md and any supportive images to this folder.
  * Submit a link to your `/docs/README.md` for your canvas submission
  
## Operation
* In the folder for each class in the class repository, you will find a `lab` folder
* The folder for each day in the repo contains:
  * LAB.md - The instructions for the lab
  * README.md - A template which you will fill out each day to submit your lab 
  * `starter-code` folders - Contains any starter code for your lab
* Create a new github repository for each lab
  * If there is a `starter-code` folder for the lab, **copy it's contents** *(not the folder itself)* into your new repository
* Ensure that your repository/branch is connected to travis-ci.com
* For deployable labs (servers)...
  * Ensure that your repository/branch is connected to a dyno at heroku.com
    * Create a new one for each day that contains a server deployment
    
## Assignment 1: Code that writes code …
 Using only buffers and bit manipulation, generate a file in the files folder called loop.js that initiates an array with 3 people’s names, iterates them with a forEach loop, and console.log’s each value.
 You may not use Buffer.from() to simply create a buffer from chunks of your target code. Rather, you will need to work character by character.
 Verify your work by running node loop.js from within the files folder and seeing the array items printed out.
 
## Deployment - Server Based Labs
 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable
 
## Deployment - React Labs
 * Your app must be deployed at AWS Cloudfront
 * Use an automated deployment, connecting your repository to AWS through cloud formation
 
## Testing
 * Write a complete set of tests for all data models, independent of the server
 * For testing the server and routes, use `supertest` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * Your tests must be running green on travis.com
 
##  Documentation
 * Write JSDoc for every function
 * Run `jsdoc` and target the docs folder as the target for the build.
 * For API Servers, put an updated `swagger.json` file in the docs/config folder
   * Ensure that your API server has a /doc route to serve the swagger doc, using that config file as its source
 * Copy the README-template.md file from the instructions folder, rname it to `README.md` and include it in your lab folder.
   * Be sure to include the URLs to your server, api docs, and jsdocs at Heroku
   * Be sure to include a UML / Flow Drawing of your application
 
