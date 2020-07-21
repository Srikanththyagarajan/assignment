let data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let sort = document.querySelector(".sort");
let shuffle = document.querySelector(".shuffle");
let wrapper = document.querySelector(".wrapper");
// (function () {
//   let render = (data) => {
//     let box = data
//       .map((el) => `<label class="tiles tiles${el}">${el}</label>`)
//       .join("");
//     wrapper.insertAdjacentHTML("afterbegin", box);
//   };

//   sort.onclick = () => {
//     tiles = tiles.reverse();
//     wrapper.innerHTML = "";
//     render(tiles);
//   };

//   shuffle.onclick = () => {
//     for (let i = tiles.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
//     }
//     wrapper.innerHTML = "";
//     render(tiles);
//   };

//   render(tiles);
// })();

class grid {
  constructor(data, wrapper) {
    this.data = data;
    this.wrapper = wrapper;
  }

  sorted() {
    this.data = this.data.reverse();
    wrapper.innerHTML = "";
    this.render(this.data);
  }

  shuffled() {
    for (let i = this.data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    wrapper.innerHTML = "";
    this.render(this.data);
  }
  render(data) {
    let box = this.data
      .map((el) => `<label class="tile tile${el}"><span></span>${el}</label>`)
      .join("");
    wrapper.insertAdjacentHTML("afterbegin", box);
  }
}

let layout = new grid(data, wrapper);
layout.render();
sort.onclick = () => {
  layout.sorted();
};
shuffle.onclick = () => {
  layout.shuffled();
};
