//vanilla js way

let grids = document.querySelectorAll("div");

let num = 0;

const delay = time => new Promise(resolve => setTimeout(resolve, time));

grids.forEach(grid => {
  delay(0).then(() => {
    setTimeout(() => {
      grid.style.backgroundColor = "red";
    }, (num += 100));
  });

  delay(500).then(() => {
    setTimeout(() => {
      grid.style.backgroundColor = "lightblue";
      grid.style.width = "90%";
    }, (num += 100));
  });
});
