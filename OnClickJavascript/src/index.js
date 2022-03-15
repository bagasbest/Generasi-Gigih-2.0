import "./styles.css";

const users = [
  { name: "Andi", age: 19 },
  { name: "Budi", age: 30 },
  { name: "Cici", age: 23 }
];

let html = "<table border='1|1'>";
let getAllAge = 0;
for (let i = 0; i < users.length; i++) {
  html += "<tr>";
  html += "<td>" + users[i].name + "</td>";
  html += "<td>" + users[i].age + "</td>";
  html += "</tr>";

  getAllAge += users[i].age;
}

document.getElementById("app").innerHTML = html;
document.getElementById("btn").onclick = function () {
  fun();
};

function fun() {
  document.getElementById("getAllAge").innerHTML = getAllAge / users.length;
}
