import "./styles.css";

document.getElementById("submit").onclick = function () {
  fun();
};

function fun() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  alert("Title: " + title + "\n" + "Description " + desc);
}
