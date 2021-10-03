// Gemxploding (c) by ATAlgaba
//
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
//
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

import {
  CardInterface,
  GameInterface,
  PlayerInterface,
  UserInterface,
} from '@gemxploding/api-interfaces';
import { Player } from './player';

const createID = (): string =>
  Math.random()
    .toString(36)
    .toUpperCase()
    .replace(/[^A-Z]+/g, '')
    .substr(0, 4);

export class Game implements GameInterface {
  id: string;
  password: string;
  turn: number;
  players: PlayerInterface[];
  drawPile: CardInterface[];
  discardPile: CardInterface[];

  constructor({ password }) {
    this.id = createID();
    this.password = password;
    this.turn = -1;
    this.players = [];
    this.drawPile = [];
    this.discardPile = [];
  }

  addPlayer = (user: UserInterface) => {
    const isAlreadyInGame = this.players.some((p) => p.id === user.id);
    if (!isAlreadyInGame) {
      this.players.push(new Player(user));
    }
  };
}
