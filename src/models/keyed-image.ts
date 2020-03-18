export class KeyedImage {
  key: string;
  image: any;

  constructor(src: IKeyedImage) {
    this.key = src.key;
    this.image = src.image;
  }
}

export interface IKeyedImage {
  key: string;
  image: any;
}