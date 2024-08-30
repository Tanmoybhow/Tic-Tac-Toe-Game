let cells = document.querySelectorAll(".cell");
let value = "X";
let player = "Player 1 Turn";
const setValue = (id) => {
  document.querySelector(`#${id}`).innerHTML = value;
  document.querySelector(`#${id}`).classList.add("disabledbutton");
  if (value == "X") {
    value = "O";
    player = "Player 2 Turn";
    document.querySelector("h2").innerText = player;
  } else {
    value = "X";
    player = "Player 1 Turn"
    document.querySelector("h2").innerText = player;
  }

  winAlert(id,player);
};
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    let id = e.target.getAttribute("id");
    setValue(id);
  });
});

// if ((a.innerHTML == b.innerHTML) == c.innerHTML) {
//   alert(`${a.innerHTML} Win`);
// }

function winAlert(id,player) {
  let a = document.querySelector("#a");
  let b = document.querySelector("#b");
  let c = document.querySelector("#c");
  let d = document.querySelector("#d");
  let e = document.querySelector("#e");
  let f = document.querySelector("#f");
  let g = document.querySelector("#g");
  let h = document.querySelector("#h");
  let i = document.querySelector("#i");

  if (
    a.innerText == b.innerText &&
    a.innerText == c.innerText &&
    a.innerText != "" &&
    (b.innerText != "") & (c.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector("#firstLine").style.width = "95%";
    playAgain(player)
  } else if (
    d.innerText == e.innerText &&
    d.innerText == f.innerText &&
    d.innerText != "" &&
    (e.innerText != "") & (f.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector("#secondLine").style.width = "95%";
    playAgain(player)
  } else if (
    g.innerText == h.innerText &&
    g.innerText == i.innerText &&
    g.innerText != "" &&
    (h.innerText != "") & (i.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector("#thirdLine").style.width = "95%";
    playAgain(player)
  }

  else if (
    a.innerText == d.innerText &&
    a.innerText == g.innerText &&
    a.innerText != "" &&
    (d.innerText != "") & (g.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector(".v_line.one").style.height = "265%";
    playAgain(player)
  }

  else if (
    b.innerText == e.innerText &&
    b.innerText == h.innerText &&
    b.innerText != "" &&
    (e.innerText != "") & (h.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector(".v_line.two").style.height = "265%";
    playAgain(player)
  }

  else if (
    c.innerText == f.innerText &&
    c.innerText == i.innerText &&
    c.innerText != "" &&
    (f.innerText != "") & (i.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector(".v_line.three").style.height = "265%";
    playAgain(player)
  }


  else if (
    a.innerText == e.innerText &&
    a.innerText == i.innerText &&
    a.innerText != "" &&
    (e.innerText != "") & (i.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector(".v_line.left_right").style.height = "325%";
    playAgain(player)
  }

  else if (
    c.innerText == e.innerText &&
    c.innerText == g.innerText &&
    c.innerText != "" &&
    (e.innerText != "") & (g.innerText != "")
  ) {
    // setTimeout(() => {
    //   playAgain();
    // }, 300);
    document.querySelector(".v_line.right_left").style.height = "325%";
    playAgain(player)
  }

  else{
    let cells = document.querySelectorAll(".cell");
    
  }


  
}

function playAgain(player) {
  document.querySelector("button").style.visibility = "visible";
  if(player == "Player 1 Turn")
  {
    player = "Player 2 Turn"
  }else{
    player = "Player 1 Turn"
  }
  player = player.slice(0,8);
  document.querySelector("h2").innerHTML = `${player} Win`;
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.add("disabledbutton");
  });
}

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
console.log(document.querySelector(".v_one"))