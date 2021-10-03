// Gemxploding (c) by ATAlgaba
//
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
//
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

export interface CardInterface {
  id: number;
  name: string;
  image?: string;
}

export interface GemCard extends CardInterface {
  value: number;
}

export interface SpecialCard extends CardInterface {
  onUse?: () => void;
  onDraw?: () => void;
  onExplosion?: () => void;
}

export interface UserInterface {
  id: number;
  name: string;
  color: string;
}

export interface PlayerInterface extends UserInterface {
  backpack: Array<CardInterface>;
  hand: Array<CardInterface>;
}

export interface GameInterface {
  id: string;
  password: string;
  turn: number;
  players: Array<PlayerInterface>;
  drawPile: Array<CardInterface>;
  discardPile: Array<CardInterface>;
}
