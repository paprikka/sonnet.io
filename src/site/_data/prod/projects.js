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
        date: '2016-04-24',
        demoURL: 'https://facade.photo',
        content: `
        Façade makes it easy to create studio lighting using your phone, computer or tablet. Launched in Spring 2016, also used in the Rainbotron™ (an art installation/im promptu photo studio made of furniture salvaged in Brick Lane). 


        Check out the [post launch article](goo.gl/JxpJQY) as well as the [gallery](https://500px.com/p/rafalpast/galleries/facade).

        `,
    },

    {
        title: 'Goatspeed you! Black Phillip',
        content: 'A simple app reminding me to speak more slowly',
        demoURL: 'https://twitter.com/rafalpast/status/1272945933228167169',
        date: '2020-06-14',
    },
    {
        title: 'Lana!',
        date: '2022-12-09',
        content: 'NPM scripts with better UX',
        demoURL: 'https://www.npmjs.com/package/lana-cli',
    },
    {
        title: 'Kalam',
        date: '2017-02-24',
        content:
            'Markov Chain based procedural name generator used for Storienteer',
        demoURL: 'https://github.com/paprikka/kalam',
    },
    {
        title: 'Mrr',
        date: '2023-01-10',
        content: 'are you ready to Mrrr?',
        demoURL: 'https://mrr.sonnet.io',
    },
    {
        title: 'Physically accurate Mrr',
        date: '2023-01-11',
        content: 'are you ready to Mrrr, Newton?',
        demoURL: 'https://mrrr.vercel.app',
    },
    {
        title: 'YAFTL(yet another fucking todo list)',
        date: '2020-05-14',
        content: 'Materials from the prototyping course I ran via Twitch',
        demoURL: 'https://github.com/paprikka/yaftl',
    },
    {
        title: 'Dotfile Paella',
        date: '2022-11-24',
        content:
            'A bunch of dotfile settings I use frequently and a small group of people considers moderately useful.',
        demoURL: 'https://github.com/paprikka/dotfile-paella',
    },
    {
        title: '18 Musicians',
        date: '2021-10-24',
        content:
            'Interactive Album cover for 18 Musicians by Steve Reich, performed by Eric Hall (check the site for credits)',
        demoURL: 'https://18-musicians.vercel.app',
    },
    {
        title: 'Reactive Hole',
        date: '2021-01-30',
        content: 'A browser-based P2P file sharing app',
        demoURL: 'https://reactive-hole.vercel.app',
        links: [
            {
                type: 'article',
                href: 'https://sonnet.io/posts/reactive-hole/',
            },
            {
                type: 'source',
                href: 'https://github.com/paprikka/reactive-hole',
            },
        ],
    },
    {
        title: 'Laconic',
        date: '2020-06-15',
        content: `Use Twitter as a CDN! Serve Pong, or the Epic of Gilgamesh from a single tweet.

            Some useless [examples](https://twitter.com/rafalpast/status/1316836397903474688) (a Twitter thread)
            `,
        demoURL: 'https://laconic-mu.vercel.app/editor.html',
    },
]

// TODO projects:
// - sulik
// - rainbotron
// - tommy
// - spiritual Volleyball
// - All Hands Meeting Simulator

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
