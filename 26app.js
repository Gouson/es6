const websites=['codecasts','laravist']
const info =websites.map(website=>`${website} is cool`)
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

for (const website of websites) {
    console.log(website)
}