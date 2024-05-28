import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((response) => json(response))
      .then((str) => JSON.parse(str))
      .then((obj) => new GameSaving(obj));

    // return new Promise((resolve) => {
    //   const data = read();
    //   data
    //     .then((response) => {
    //       const value = json(response);
    //       return value;
    //     })
    //     .then((response) => {
    //       resolve(new GameSaving(JSON.parse(response)));
    //     });
    // });
  }
}
