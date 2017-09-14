import React from 'react';

export const projects = [
    {
        name: 'movieApp',
        text: <p>
            Having enjoyed utilizing React on my To Do List application, I decided to build another
            React application
            that would be bigger in scope. This application features a custom built calendar that pulls
            in movie information and
            release dates via the theMovieDB API. I had an absolute blast designing and building the
            calendar logic while figuring out
            how to handle multiple AJAX calls to retrieve the appropriate information for each
            particular movie. I gained new found knowledge
            in higher-order functions, design paradigms, and ES6 by building this application.
        </p>,
        imgPath: null,
        sourceCodeLink: "./projects/movieApp",
        liveLink: "https://github.com/JonathanV123/movieApp",
    }, {
        name: 'memMatch',
        text: <p>
            A Lord of the Rings themed memory match game built using object oriented programming principles and
            includes dynamically created DOM elements and interactivity. I decided to build this application
            to get a better understanding of object oriented programming and Sass CSS preprocessing.
            Note: this website is best viewed in landscape mode when using mobile devices.
        </p>,
        imgPath: null,
        sourceCodeLink: "https://github.com/JonathanV123/memMatch",
        liveLink: "./projects/memMatch",
    }, {
        name: 'ajax',
        text: <p>
            This application incorporates the New York Times, Wikipedia,
            and Google Maps Geolocation API to generate location and articles asynchronously.
            The articles and location are based on user input. I built this application to
            learn more about Ajax requests and how to communicate and work with different APIs.
        </p>,
        imgPath: null,
        sourceCodeLink: "https://github.com/JonathanV123/ajax",
        liveLink: "./projects/Ajax",
    }, {
        name: 'calc',
        text: <p>
            A basic functional calculator. Though it may seem like a simple process,
            this was one of the most rewarding and challenging apps I have created.
            The amount of complex, logical puzzles involved when creating this application were a joy to solve.
            This project also incorporates unit testing through the behavior-driven development framework Jasmine.
        </p>,
        imgPath: null,
        sourceCodeLink: "https://github.com/JonathanV123/calc",
        liveLink: "./projects/calc",
    }, {
        name: 'toDoApp',
        text: <p>
            A simple To Do List app built with React. I built this application to practice using
            ES6 and get a better understanding of React and Webpack. This application features two-way
            data-binding, persisting state with local storage and live state editing. The power of React's
            state and virtual dom were an absolute joy to learn and use. React quickly became
            my favorite framework (or library!?) and I am excited to work on future applications utilizing it.
        </p>,
        imgPath: null,
        sourceCodeLink: "https://github.com/JonathanV123/reactToDo",
        liveLink: "./projects/reactToDo/app",
    }
];
