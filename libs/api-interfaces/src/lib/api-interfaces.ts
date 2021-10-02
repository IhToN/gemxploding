// Gemxploding (c) by ATAlgaba
// 
// Gemxploding is licensed under a
// Creative Commons Attribution-NonCommercial 4.0 International License.
// 
// You should have received a copy of the license along with this
// work. If not, see <http://creativecommons.org/licenses/by-nc/4.0/>.

export interface Card {
  id: number;
  name: string;
  image: string;
}

export interface GemCard extends Card {
  value: number;
}

export interface SpecialCard extends Card {
  onUse?: () => void;
  onDraw?: () => void;
}

export interface User {
  id: number;
  name: string;
  color: string;
}

export interface Player extends User {
  backpack: Array<Card>;
  hand: Array<Card>;
}

export interface Game {
  id: string;
  password: string;
  turn: number;
  players: Array<Player>;
  drawPile: Array<Card>;
  discardPile: Array<Card>;
}