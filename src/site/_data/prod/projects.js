/**
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} heroURL - The URL of the hero image.
 * @property {string} demoURL - The URL of the demo.
 * @property {boolean?} isFavourite - Whether the project is a favourite or not.
 * @property {string} content - The content of the project.
 */

/**
 * @type {Project[]}
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
}
