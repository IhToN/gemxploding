// Gemxploding (c) by ATAlgaba
//
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
//
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

import { capitalize, NEW_GAME } from '@gemxploding/api-interfaces';
import { Server, Socket } from 'socket.io';
import { database } from './app/store';
import { Game } from './models/game';

const TAG = '[socketHandler]';

export default (socket: Socket, io: Server) => {
  const logError = (message: string) => {
    console.error(`${TAG} ${message}`);
    io.to(socket.id).emit('error', message);
  };

  const on = (event: string, listener: (...args: any[]) => void) => {
    socket.on(event, (data) => {
      try {
        listener(data);
      } catch (error) {
        logError(`on${capitalize(event)}: ${error?.message}`);
      }
    });
  };

  on(NEW_GAME, (data) => {
    const game = new Game(data);
    database.addGame(game);
    io.to(socket.id).emit(NEW_GAME, game);
  });
};
