export const content = {
    nav: {
        logo: 'IY',
        links: [
            { text: 'Home', to: '/' },
            { text: 'About', to: '/about' },
            { text: 'Music', to: '/music' },
            { text: 'Contact', to: '/contact' },
        ],
    },
    stack: {
        title: 'Stack',
        tech: [
            {
                img: process.env.PUBLIC_URL + '/assets/mongo.png',
                alt: 'mongodb',
            },
            {
                img: process.env.PUBLIC_URL + '/logo512.png',
                alt: 'react',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/express.png',
                alt: 'express',
            },
            {
                img: process.env.PUBLIC_URL + '/assets/node.png',
                alt: 'node',
            },
        ],
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },
};
