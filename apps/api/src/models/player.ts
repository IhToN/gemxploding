// Gemxploding (c) by ATAlgaba
//
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
//
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

import {
  CardInterface,
  PlayerInterface,
  UserInterface,
} from '@gemxploding/api-interfaces';

export class Player implements PlayerInterface {
  backpack: CardInterface[];
  hand: CardInterface[];
  id: number;
  name: string;
  color: string;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.name = user.name;
    this.color = user.color;

    this.backpack = [];
    this.hand = [];
  }
}
