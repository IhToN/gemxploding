
# Gemxploding

Board game made for online playing. The project consists in an API and a Client.

The API uses Node.js, Express and Socket.io to handle the different games.
The Client uses React.

Both of them are going to be developed using TypeScript.

## Game Rules

In the deck of cards are some Bombs, Gems and Special Cards. You play the game by putting the shuffled deck face down and taking turns by drawing as many cards facing down as you want (at least one) until you decide to end your turn or you draw a Bomb. If you end your turn by choice save all of the Gems you have drawn in your backpack, if you draw a Bomb you lose all of your gems.

The game continues until the draw pile is empty.
Once emptied all of the players sells the stored gems, the one who got the most money wins.

### Card Types

#### Gems

These are your path to win. Each Gem has a value, try to save as many as you can.

| gem | value |
| --- | --- |
| ruby | 1g |
| sapphire | 2g |
| emerald | 5g |
| diamond | 10g |

#### Bombs

Just a bomb: if you draw it, kaboom.

#### Special Cards

These are cards with Special "Powers".

| name | type | power |
| --- | --- | --- |
| lantern | use | see the next 3 cards in the draw pile and place them back without changing their order |
| helmet | equipment | when drawing a bomb, end your turn and discard half of your hand rounding up |
| dynamite | draw | draw the next 3 cards |

--------------------------------------------------------------------------------------------------------------------------------

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@gemxploding/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
