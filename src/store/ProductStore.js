import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._category = [
      { id: 1, name: "Sushi" },
      { id: 2, name: "Rolls" },
      { id: 3, name: "Poke" },
      { id: 4, name: "Sets" },
      { id: 5, name: "Drinks" },
    ];
    this._products = [
      {
        id: 1,
        title: "Sushi Ebi (3 pcs.)",
        price: 10,
        img: "images/ebi_sushi.jpg",
      },
      {
        id: 2,
        title: "Sushi Sake (3 pcs.)",
        price: 8,
        img: "images/sake_sushi.jpg",
      },
      {
        id: 3,
        title: "Philadelphia roll",
        price: 11,
        img: "images/roll-filadelfija-medium-rectangular-b95e4f9fa26c44a19031670e448374fa.jpeg",
      },
      {
        id: 4,
        title: "Baked roll",
        price: 13,
        img: "images/zapechennyjj-roll-s-lososem-medium-rectangular-764a91ea6d4f4323bc017312e8503621.jpeg",
      },
      {
        id: 5,
        title: "Unagi roll dragon",
        price: 12,
        img: "images/zapechennyjj-roll-s-bekonom-medium-rectangular-b1313fffb4b14b178c0f3e3ade09248d.jpeg",
      },
      {
        id: 6,
        title: "Roll syake maki with cucumber",
        price: 6,
        img: "images/maki-s-ogurcom-medium-rectangular-fc82b91f9d61471d98f28ed367c5bfd3.jpeg",
      },
      {
        id: 7,
        title: "Fish roll",
        price: 7,
        img: "images/maki-s-tuncom-medium-rectangular-5ba382fa55c64cde940c56f147d23a17.jpeg",
      },
      {
        id: 8,
        title: "California roll",
        price: 13,
        img: "images/roll-kalifornija-medium-rectangular-79889a88d972498a9abd5717a4a081a0.jpeg",
      },
      {
        id: 9,
        title: "Baked eel roll",
        price: 14,
        img: "images/zapechennyjj-roll-s-ugrem-medium-rectangular-6571718da8d54c5fae1d71e8aeb967f9.jpeg",
      },
      {
        id: 10,
        title: "Baked roll with tiger shrimp",
        price: 15,
        img: "images/zapechennyjj-shichimi-roll-s-krevetkojj-medium-rectangular-bcdb65ebc86f4ba094edbda2dc5b4dd7.jpeg",
      },
      {
        id: 11,
        title: "Tempura roll with shrimp",
        price: 13,
        img: "images/roll-s-tuncom-i-krevetkojj-medium-rectangular-f4ab4c29d3cc473ba61e0dcc4676021d.jpeg",
      },
      {
        id: 12,
        title: "Bowl with salmon",
        price: 15,
        img: "images/boul-s-lososem-medium-rectangular-fc63ba26b2604a999a2b1c264c5932fc.jpeg",
      },
      {
        id: 13,
        title: "Vegetarian bowle",
        price: 12,
        img: "images/boul-vegetarianskijj-medium-rectangular-cfe2cb81c6cb4d9780c6add05ceb0a16.jpeg",
      },
      {
        id: 14,
        title: "Bowl with beef",
        price: 16,
        img: "images/boul-s-govjadinojj-medium-rectangular-cee370be95894b19b6058281566fbce0.jpeg",
      },
      {
        id: 15,
        title: "Bowl with tuna",
        price: 15,
        img: "images/boul-s-tuncom-medium-rectangular-b63bbda58f394d30ad92eb828425e284.jpeg",
      },
      {
        id: 16,
        title: "Shaverma_Bowl",
        price: 12,
        img: "images/shaverma-boul-medium-rectangular-8d9faa4aa96f4815801d480c9790ce3f.jpeg",
      },
      { id: 17, title: "Daily Set", price: 50, img: "images/Second_set.jpg" },
      { id: 18, title: "Solomoon", price: 60, img: "images/Third_set.jpg" },
      {
        id: 19,
        title: "Feast of Taste",
        price: 80,
        img: "images/Fourth_set.jpg",
      },
      { id: 20, title: "Fusion", price: 30, img: "images/Fifth_set.jpg" },
      { id: 21, title: "Unagi Set", price: 29, img: "images/sixth_set.jpg" },
      { id: 22, title: "Discover", price: 25, img: "images/seventh_set.jpg" },
      { id: 23, title: "Perfect Mix", price: 22, img: "images/Eight_set.jpg" },
      { id: 24, title: "Lover", price: 19, img: "images/Ninth_set.jpg" },
      { id: 25, title: "Red Bull", price: 4, img: "images/redbull.JPG" },
      { id: 26, title: "Coka Cola", price: 2, img: "images/cola.JPG" },
      { id: 27, title: "Corona Extra", price: 3, img: "images/Corona.jpg" },
      { id: 28, title: "Stella Artois", price: 1, img: "images/Stella.jpg" },
      {
        id: 29,
        title: "Veihenstephaner",
        price: 2,
        img: "images/Weihenstephane.jpg",
      },
      {
        id: 30,
        title: "Scuderia Italia Chianti 2012",
        price: 99,
        img: "images/First_wine.jpg",
      },
      {
        id: 31,
        title: "Scuderia Italia 2011",
        price: 129,
        img: "images/Second_wine.jpg",
      },
    ];
    makeAutoObservable(this);
  }
  setCategory(category) {
    this._category = category;
  }
  setProducts(products) {
    this._products = products;
  }
  get category() {
    return this._category;
  }
  get products() {
    return this._products;
  }
}
