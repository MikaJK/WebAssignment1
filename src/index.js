import "./styles.css";
function1();

function function1() {
  document.getElementById("my-button").addEventListener("click", function () {
    console.log("hello world");
    let h1l = document.getElementById("helo");
    h1l.innerHTML = "My notebook";
  });
  const deButto = document.getElementById("add-data");
  deButto.addEventListener("click", function () {
    var ul = document.getElementById("comments");
    var li = document.createElement("li");
    var dI = document.createElement("h1");
    dI.innerHTML = document.getElementById("textA").value;
    li.appendChild(dI);
    ul.appendChild(li);
  });
}
/*const deButton = document.getElementById("add-comment");
  deButton.addEventListener("click", function () {
    var ul = document.getElementById("comments");
    var li = document.createElement("li");
    var dI = document.createElement("div");
    dI.classList.add("comment");
    var fEle = document.createElement("div");
    fEle.classList.add("comment-rating");
    var sEle = document.createElement("div");
    sEle.classList.add("comment-text");

    var dIBut = document.createElement("button");
    dIBut.classList.add("remove-comment");
    dIBut.appendChild(document.createTextNode("remove comment"));

    fEle.appendChild(
      document.createTextNode(document.getElementById("reviewNro").value + " ")
    );
    sEle.appendChild(
      document.createTextNode(document.getElementById("comment").value)
    );
    dIBut.addEventListener("click", function () {
      dIBut.parentNode.parentNode.remove();
    });
    dIBut.style.visibility = "hidden";
    dI.appendChild(fEle);
    dI.appendChild(sEle);
    dI.appendChild(dIBut);

    li.appendChild(dI);
    ul.appendChild(li);
  }); */
