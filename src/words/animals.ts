import { Word } from "../models/word";
import Bear from "../assets/bear.jpg";
import Bear2 from "../assets/bear2.jpg";
import Wolf from "../assets/wolf.jpg";

export const animals: Array<Word> = [
  {
    englishWord: "bear", 
    spanishWord: "oso",
    keyedImages: [ 
      { key: "bear", image: Bear },
      { key: "bear2", image: Bear2 }
    ]
  },
  {
    englishWord: "wolf",
    spanishWord: "lobo",
    keyedImages: [
      { key: "wolf", image: Wolf }
    ]
  }
];