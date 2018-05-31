import React from 'react';

export const allProjects = [
    {
        title: 'Watchy',
        name: 'projectSplash nodeJsApp',
        classNameAlt: 'fullstackApplication',
        text: <p>
            This app features a login system with user authentication using passport.js, password reset system using the SendGrid
            mail API, friends system, and a night mode. Watchy is an application that allows you to create an account and add your friends. Once you add them, you
            can recommend shows to watch, or share what shows you are currently watching. This project solidified my love of coding, and
            I can't wait incorporate everything I've learned into future projects. This project taught me about Function Composition, the MVC pattern, sending emails,
            user authentication, template engines, and the HTTP request/response cycle.
        </p>,
        techUsed: ['Node.js', 'Javscript', 'CSS', 'Responsive Design', 'Express', 'Webpack', 'MongoDB', 'Mongoose', 'Pug'],
        sourceCodeLink: "https://github.com/JonathanV123/myNodeApp",
        liveLink: "https://watchytv.herokuapp.com/",
    },
    {
        title: 'React Movie App',
        name: 'projectSplash movieApp',
        classNameAlt: 'movieApplication',
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
        techUsed: ['React', 'Javascript', 'CSS', 'ES6', 'Responsive Design', 'Webpack'],
        sourceCodeLink: "https://github.com/JonathanV123/movieApp",
        liveLink: "./projects/movieApp",
    }, {
        title: 'Lord of The Rings Memory Match',
        name: 'projectSplash memMatch',
        classNameAlt: 'memoryMatchApplication',
        text: <p>
            A Lord of the Rings themed memory match game built using object oriented programming principles and
            includes dynamically created DOM elements and interactivity. I decided to build this application
            to get a better understanding of object oriented programming and Sass CSS preprocessing.
            Note: this website is best viewed in landscape mode when using mobile devices.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'jQuery', 'Sass', 'Responsive Design', 'Webpack'],
        sourceCodeLink: "https://github.com/JonathanV123/memMatch",
        liveLink: "./projects/memMatch",
    }, {
        title: 'City Information and News',
        name: 'projectSplash ajax',
        classNameAlt: 'ajaxApplication',
        text: <p>
            This application incorporates the New York Times, Wikipedia,
            and Google Maps Geolocation API to generate location and articles asynchronously.
            The articles and location are based on user input. I built this application to
            learn more about Ajax requests and how to communicate and work with different APIs.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'jQuery', 'Responsive Design',],
        sourceCodeLink: "https://github.com/JonathanV123/ajax",
        liveLink: "./projects/Ajax",
    },
    {
        title: "Hu's Szechwan",
        name: 'projectSplash husSplash',
        classNameAlt: 'restaurantWebsite',
        text: <p>
            Restaurant Website. Implemented custom Javascript and CSS to meet customer needs. Developed and maintained front end funcationality of the website.
            Added Grubhub integration for easy online ordering.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'Responsive Design', 'Wordpress'],
        sourceCodeLink: "https://github.com/JonathanV123/calc",
        liveLink: "https://husszechwan.com/",
    }, {
        title: 'Calculator',
        name: 'projectSplash calc',
        classNameAlt: 'calculatorApplication',
        text: <p>
            A basic functional calculator. Though it may seem like a simple process,
            this was one of the most rewarding and challenging apps I have created.
            The amount of complex, logical puzzles involved when creating this application were a joy to solve.
            This project also incorporates unit testing through the behavior-driven development framework Jasmine.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'Responsive Design', 'Unit Testing', 'Webpack'],
        liveLink: "./projects/calc",
    },
    {
        title: "Danny's Barber Shop",
        name: 'projectSplash dannys',
        classNameAlt: 'barberShop',
        text: <p>
            Website for a barbershop business. Developed UI/UX design. Optimized application performance, and incorporated custom animations and load screen. Collaborated with customer
            to deliver specific creative requirements.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'Responsive Design', 'Bootstrap', 'Custom Animations'],
        sourceCodeLink: "https://github.com/JonathanV123/danBarberShop",
        liveLink: "http://www.dannysbarbershopwestla.com/",
    },
    {
        title: 'JNW FILMS',
        name: 'projectSplash jnw',
        classNameAlt: 'jnwFilms',
        text: <p>
            Custom built website for Film Producer, Director, and Writer. Followed strict styling and design instructions to build out a custom designed and animated website
            unique to the customer.
        </p>,
        techUsed: ['HTML', 'CSS', 'Javscript', 'Responsive Design', 'FullPage.js', 'Custom Animations', 'jQuery'],
        sourceCodeLink: "https://github.com/",
        liveLink: "http://jnwfilms.com/",
    },
];
