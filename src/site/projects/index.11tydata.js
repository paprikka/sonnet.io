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
Sit down and do *nothing*.

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
        content: `Butter is a browser extension that skips sponsored content in YouTube videos by watching them before you do. Because you deserve butter.`,
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

        Although the app is 100% private and we offer feature-parity between paid and free versions, we have a regular stream of new, paying users.

        The user base is small and diverse, including neurodivergent individuals, budding writers, those using Ensō to process and understand their emotions, and people trying to improve their language fluency.
        
        Personally, I'm just really happy that 1,000,000 written words later, I still come back to it every single morning.
`,
    },
]

/**
 * @type {import('./types').RemainingProject[]}
 */
const remainingProjects = [
    {
        title: 'Days',
        date: '2023-07-03',
        demoURL: 'https://days.sonnet.io',
        content: `
        My life in days, inspired by Buster Benson's [Life in Weeks](https://busterbenson.com/life-in-weeks).

        Feel free to fork it, but please be gentle, it's still the first iteration.
        `,
        links: [{ type: 'source', url: 'https://github.com/paprikka/days' }],
    },
    {
        title: 'Tip of the Tongue',
        date: '2023-07-03',
        demoURL: 'https://tip.potato.horse',
        content: `Tip. is a parahippocampal gyrus massage tool.

You describe the thing you can't name and it spits out a [guess](https://twitter.com/rafalpast/status/1676517556159492097?s=20).
        `,
    },
    {
        title: 'Lemonade',
        date: '2023-06-30',
        demoURL: 'https://lemonade.sonnet.io',
        content: `Lemonade is a stupid simple Fediverse community browser.

        It's aimed at people who are not familiar with federated social media.
        `,
        links: [{ type: 'article', url: 'https://lemonade.sonnet.io/about' }],
    },
    {
        title: 'Meat-GPT',
        date: '2023-05-23',
        demoURL: 'https://meat-gpt.sonnet.io',
        content: `"Prime answers to rare questions."

        The success of the site was to a large part driven by terrible AI site catalogues, and their hallucinated ideas of what Meat-GPT is about.

        Irony deficency is not a joke. Remember to get tested regularly.
        `,
    },
    {
        title: 'Tommy the Toe and the Chamber of Hostile Carpentry',
        date: '2020-02-01',
        demoURL: 'https://apps.apple.com/gb/app/tommy-the-toe/id1498417487',
        content: `An iOS game where the initial inspiration was a broken toe of my partner. 
        Contains hand-drawn graphics, and a custom *over*-engineered AI.

        Check the gameplay video [here](https://www.reddit.com/r/iosgaming/comments/f4bkov/my_girlfriend_broke_a_toe_so_i_made_a_game_about/).
        `,
    },
    {
        title: 'Important Meeting Notes',
        date: '2021-11-01',
        content: `A collection of drawings and short visual stories updated irregularly but frequently.

        It was originally inspired by the notes I took during useless middle management meetings.
        
        You can learn more about the project [here](https://sonnet.io/posts/use-rainbow/) or on [css-tricks](https://css-tricks.com/userainbow/).

        `,
        demoURL: 'https://potato.horse',
        links: [
            { type: 'article', url: 'https://sonnet.io/posts/use-rainbow/' },
        ],
    },

    {
        title: 'How to Run an All-hands Meeting',
        date: '2021-05-07',
        demoURL: 'https://rafsters.itch.io/all-hands',
        content: `A short (3-6m) walking sim recreating the experience of attending a useless corporate meeting.
        `,
    },

    {
        title: 'Medieval (Content) Farm',
        date: '2023-04-28',
        demoURL: 'https://tidings.potato.horse',
        content: `Your biased and hallucinated news source curated by a team of talented writers. Every day they scour the internet for the most interesting and relevant events of the realm. They're so good, the thing just writes itself.
        
        Please read the [Why](https://tidings.potato.horse/about) section for more (serious) context.
        `,

        links: [{ type: 'article', url: 'https://tidings.potato.horse/about' }],
    },
    {
        title: 'Dall-e UI Cheap Bastard Edition™',
        date: '2022-11-10',
        demoURL: 'https://dall-e.sonnet.io',
        content: `
        A (6-10 times) cheaper Dall-e UI, initially used for my own testing purposes.
        
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


        Check out the [post launch article](https://goo.gl/JxpJQY) as well as the [gallery](https://500px.com/p/rafalpast/galleries/facade).
        `,
    },

    {
        title: 'Goatspeed you! Black Phillip',
        content: 'A simple app reminding me to speak more slowly.',
        demoURL: 'https://twitter.com/rafalpast/status/1272945933228167169',
        date: '2020-06-14',
    },
    {
        title: 'Lana!',
        date: '2016-03-07',
        content: 'NPM scripts with better UX',
        demoURL: 'https://www.npmjs.com/package/lana-cli',
    },
    {
        title: 'Kalam',
        date: '2017-02-24',
        content:
            'Markov Chain based procedural name generator used for Storienteer.',
        demoURL: 'https://github.com/paprikka/kalam',
    },
    {
        title: 'Mrr',
        date: '2023-01-10',
        content: 'Are you ready to Mrrr?',
        demoURL: 'https://mrr.sonnet.io',
    },
    {
        title: 'Physically accurate Mrr',
        date: '2023-01-09',
        content: 'Are you ready to Mrrr, Newton?',
        demoURL: 'https://mrrr.vercel.app',
    },
    {
        title: 'YAFTL(yet another fucking todo list)',
        date: '2020-05-14',
        content: 'Materials from a quick prototyping course I ran via Twitch.',
        demoURL: 'https://github.com/paprikka/yaftl',
    },
    {
        title: 'Dotfile Paella',
        date: '2021-11-24',
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
        title: 'Laconic! (a Twitter CDN)',
        date: '2020-06-15',
        content: `Serve Pong, or the Epic of Gilgamesh from a single tweet.
        
            > *By Grabthar’s Hammer... what a savings.*

            Some useless [examples](https://twitter.com/rafalpast/status/1316836397903474688) (a Twitter thread)
            `,
        demoURL: 'https://laconic.sonnet.io/editor.html',
        links: [{ type: 'article', url: require('./laconic-url') }],
    },
    {
        title: 'Sulik',
        date: '2014-02-01',
        content: `A proof-of-concept voice assistant using voice recognition, sophisticated text-to-speech services and Wolfram Alpha trying to act as a more geeky Siri. Pitched as an *HTML 5* (not AI!) voice assistant, because that was the buzzword du jour in 2014.

        Seems like I was onto something, since 9 years later OpenAI [released their Wolfram Alpha plugin](https://writings.stephenwolfram.com/2023/03/chatgpt-gets-its-wolfram-superpowers/).`,
        demoURL: 'https://github.com/paprikka/sulik',
    },
    {
        title: 'Return to Castle Kittenstein',
        date: '2016-06-02',
        content: `A purely browser-based augmented reality (dance!) game where you get a chance to fight an evil army of kittens with bananas, glowsticks and body paint.
        `,
        demoURL: `https://photos.google.com/share/AF1QipNvmuU36hIiBmWuWYEbyXQstq6b2kZadtZJbmifOEu80IEQ_6HNsKXIsrmVrGLXaQ?key=OUNNUXdMVFExeDFhVFViYjhXcVA0c3JWbElFS2VB`,
        links: [
            { type: 'source', url: 'https://github.com/paprikka/kittenstein' },
        ],
    },
    {
        title: 'Haiku',
        date: '2013-10-09',
        content: `
        A minimalist, collaborative presentation tool:
        
        1. Drag and drop a bunch of pictures or text into your browser
        2. Share a link
        3. Control the presentation from your phone.
        `,
        demoURL: 'https://github.com/paprikka/haiku',
    },
    {
        title: 'Rainbotron',
        date: '2016-04-25',
        content: `
            An art installation/impromptu photo studio made of furniture salvaged in Brick Lane. WebSockets meets Spotify meets your grandma's old wardrobe.
            `,
        demoURL: 'https://500px.com/photo/151829029/aaron-by-rafal-pastuszak',
    },
    {
        title: 'Bat!',
        date: '2013-04-27',
        content: 'Quickly measure site contrast and readability',
        demoURL: 'https://github.com/paprikka/le-bat',
        links: [
            {
                type: 'source',
                url: 'http://paprikka.github.io/le-bat/#/preview',
            },
        ],
    },
    {
        title: 'Werework',
        date: ['2016-04-25', '2018-04-25'],
        content: `
        I was a host and co-founder of Werework—a creative tech speakeasy based in London. We'd meet (almost!) every full moon to drink, eat, talk, and play with digital experiments.
        `,
        demoURL: 'https://medium.com/werework-thinks',
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
    date: Array.isArray(project.date)
        ? project.date.map((d) => new Date(d))
        : new Date(project.date),
})

module.exports = {
    foo: 'bar',
    favourites: favourites.map(formatProject),
    remaining: [
        ...remainingProjects.sort((a, b) => {
            const dateA = new Date(Array.isArray(a.date) ? a.date[0] : a.date)
            const dateB = new Date(Array.isArray(b.date) ? b.date[0] : b.date)

            return dateB - dateA
        }),
    ].map(formatProject),
}
