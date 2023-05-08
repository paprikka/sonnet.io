/**
 * @type {import('./types').Project[]}
 */
const favourites = [
    {
        title: 'Sit.',
        heroURL: './hero-sit.png',
        demoURL: 'https://sit.sonnet.io',
        isFavourite: true,
        date: '2022-12-25',
        content: `
Sit down and do nothing.

We spend so much time building things that steal attention &amp; extract value from users. [Sit.](https://sit.sonnet.io) does the opposite: it gives you back your time. 

Please share with a friend who needs to sit the fuck down or enjoy the experience yourself. 
        `,
    },
    {
        title: 'Butter',
        heroURL: './hero-butter.png',
        demoURL: 'https://butter.sonnet.io',
        isFavourite: true,
        date: '2023-05-05',
        content: `Butter is a browser extension that skips sponsored content in YouTube videos. It does this by watching them before you do. Because you deserve butter.`,
    },
    {
        title: 'Ensō',
        heroURL: './hero-enso.png',
        demoURL: 'https://enso.sonnet.io',
        isFavourite: true,
        date: '2018-12-06',
        content: `
        Ensō is a writing tool that helps you enter a state of flow.

        It does this by separating writing from editing and thus making it harder for you to edit yourself.

        More info [here](/posts/ulysses).
`,
    },
]

/**
 * @type {import('./types').RemainingProject[]}
 */
const remainingProjects = [
    {
        title: 'Medieval (Content) Farm',
        date: '2022-04-28',
        demoURL: 'https://tidings.potato.horse',
        content: `We're a biased and hallucinated news source curated by a team of talented writers. Every day they scour the internet for the most interesting and relevant events of the realm.`,

        links: [{ type: 'source', url: 'http://github.com' }],
    },
    {
        title: 'Dall-e UI Cheap Bastard Edition™',
        date: '2022-11-10',
        demoURL: 'https://dall-e.sonnet.io',
        content: `
        A (6-10 times) cheaper Dall-e UI. I built it for my own testing purposes.

More context [here](https://twitter.com/rafalpast/status/1591138659297726464/photo/1).

        `,
        links: [
            { type: 'source', url: 'https://github.com/paprikka/dall-e-ui' },
        ],
    },
    {
        title: 'Façade',
        date: '2022-11-10',
        demoURL: 'https://facade.photo',
        content: `
        Façade makes it easy to create studio lighting using your phone, computer or tablet. Launched in Spring 2016, also used in the Rainbotron™ (an art installation/im promptu photo studio made of furniture salvaged in Brick Lane). 


        Check out the [post launch article](goo.gl/JxpJQY) as well as the [gallery](https://500px.com/p/rafalpast/galleries/facade).

        `,
    },
]

// write a function to:
// - given a multiline string,
// - return the string without indentation:

const formatted = (str) =>
    str
        .split('\n')
        .map((line) => line.trim())
        .join('\n')
        .trim()

const formatProject = (project) => ({
    ...project,
    content: formatted(project.content),
    date: new Date(project.date),
})

module.exports = {
    favourites: favourites.map(formatProject),
    remaining: remainingProjects.map(formatProject),
}
