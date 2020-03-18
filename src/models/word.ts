import { KeyedImage } from "./keyed-image";

export class Word {
  englishWord: string;
  spanishWord: string;
  keyedImages: Array<KeyedImage>;

  constructor(src: IWord) {
    this.englishWord = src.englishWord;
    this.spanishWord = src.spanishWord;
    this.keyedImages = src.keyedImages;
  }
}

export class IWord {
  englishWord: string;
  spanishWord: string;
  keyedImages: Array<KeyedImage>;
}