var ageV, nameV, sourceV, destinationV;

function readFom() {
  ageV = document.getElementById("age").value;
  nameV = document.getElementById("name").value;
  sourceV = document.getElementById("source").value;
  destinationV = document.getElementById("destination").value;
  console.log(ageV, nameV, destinationV, sourceV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("User/" + ageV)
    .set({
      ageNo: ageV,
      name: nameV,
      source: sourceV,
      destination: destinationV,
    });
  alert("Data Inserted");
  document.getElementById("age").value = "";
  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("User/" + ageV)
    .on("value", function (snap) {
      document.getElementById("age").value = snap.val().ageNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("source").value = snap.val().source;
      document.getElementById("destination").value = snap.val().destination;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("User/" + ageV)
    .update({
        ageNo: ageV,
      name: nameV,
      source: sourceV,
      destination: destinationV,
    });
  alert("Data Update");
  document.getElementById("age").value = "";
  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("User/" + ageV)
    .remove();
  alert("Data Deleted");
  document.getElementById("age").value = "";
  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
};
