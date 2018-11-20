export const projectData = [
    {
        name: 'Virtual Nature',
        type: 'School project',
        tags: ['jQuery', 'Google Maps API', 'Google Street View', 'Bootstrap'],
        text: 'An adventure game that we developed as a school project. Our goal with the project was to develop a solution to bring traveling experiences to games. I got familiar with Google APIs during this project.',
        published: new Date(2016, 9, 1, 0, 0, 0, 0),
        image: ['virtualnature.png', 'virtualnature2.png'],
        github: 'https://github.com/roopertti/Virtuaaliluonto',
        site: null
    },
    {
        name: 'Partygame',
        type: 'My own project',
        tags: ['Node.js', 'Express.js','Angular 1.x (old)', 'Bootstrap'],
        text: 'Typical party game that I made inspired by all the party games that are usually played with a deck of cards. This project was never completely ready but it taught me a lot about front-end development.',
        published: new Date(2017, 1, 1, 0, 0, 0, 0),
        image: 'partypeli.png',
        github: null,
        site: null
    },
    {
        name: 'Chat application',
        type: 'My own project',
        tags: ['Node.js', 'Express.js', 'Socket.io', 'jQuery', 'Bootstrap'],
        text: 'My first functional chat application and also my first trial with the Socket.io library. This project taught me about handling events emitted by different sockets on a Node.js/Express server.',
        published: new Date(2016, 10, 1, 0, 0, 0, 0),
        image: 'chatapp.png',
        github: 'https://github.com/roopertti/ChatApp',
        site: null
    },
    {
        name: 'Property management application',
        type: 'School project',
        tags: ['Node.js', 'Express.js', 'Angular', 'Google Firebase', 'MaterialUI'],
        text: 'A fairly fresh project that we developed a our school project. Basically the whole project was about trying to find new digital ways to offer the services that property management firms offer to habitants. This project taught me a lot about newest version of Angular, usage of MaterialUI library and usage of Google Firebase.',
        published: new Date(2018, 5, 1, 0, 0, 0, 0),
        image: ['kiinteisto1.png', 'kiinteisto2.png'],
        github: null,
        site: null
    },
    {
        name: 'Appointment reservation system for student curator',
        type: 'Project as a summer job',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Angular 1.x (old)', 'Bootstrap'],
        text: 'This was a project that we did with another student. We created a time reservation system for our student curator. This project required a lot of full stack work with the classic MEAN stack.',
        published: new Date(2017, 5, 1, 0, 0, 0, 0),
        image: ['kuraattori.png', 'kuraattori2.png'],
        github: null,
        site: 'https://web.karelia.fi/opintokuraattorin-ajanvaraus/'
    },
    {
        name: 'Student event calendar',
        type: 'Thesis assignment',
        tags: ['React', 'Redux', 'Google Firebase', 'Google Cloud Functions','Jest', 'Enzyme', 'Styled Components'],
        text: "A student calendar which I am currently developing as a thesis assignment. I'm using Google Firebase as the back-end and React/Redux to handle all the front-end logic. For unit testing I'm also using Jest and Enzyme.",
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: ['oppari1.png', 'oppari2.png'],
        github: null,
        site: 'https://student-events.firebaseapp.com/'
    },
    {
        name: 'This portfolio page!',
        type: 'My own project',
        tags: ['React', 'Gatsby', 'Styled Components'],
        text: 'This is just a basic static site created with React and Gatsby. Hopefully it is informative enough!',
        published: new Date(2018, 10, 1, 0, 0, 0, 0),
        image: 'portfolio.png',
        github: 'https://github.com/roopertti/portfolio',
        site: null
    }
];

export const returnProjectsSorted = () => (projectData.sort((a, b) => {
    return b.published.getTime() - a.published.getTime();
}));

export const getImageLinks = () => {
    const imageFiles = require.context('./images/projektikuvat', false, /\.(png|jpe?g|svg)$/);
    const keys = imageFiles.keys();
    const imageSources = keys.map(imageFiles);
    let images = {};
    for(const index of keys.keys()) {
        const key = keys[index].substring(2);

        images = { ...images, [key]: imageSources[index] };
    }

    return images;
}