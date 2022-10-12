
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

