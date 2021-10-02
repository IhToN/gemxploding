export interface Card {
  id: number;
  name: string;
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