// Gemxploding (c) by ATAlgaba
//
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
//
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

import { Game } from '../models/game';

export const database = {
  games: {},
  addGame(game: Game) {
    this.games[game.id] = game;
  },
  getGame(gameId: number): Game {
    const game = this.games[gameId];
    if (!game) {
      // todo: throw new error;
    }
    return game;
  },
};
