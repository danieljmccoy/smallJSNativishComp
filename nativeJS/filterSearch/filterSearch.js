// filtering element in the dom practice, because well, because why not.
// let's encapsulate it, because well, encapsulation is good, globals are bad ;)

(() => { 

let input = document.getElementById("myInput");

function myFunction() {

  let filter = input.value.toUpperCase();
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName("li");
  let listOfNames = [...li];

  // any way possible to get innerHTML out of there? I know it's been optimized in html5, still hate the bells that go off in my head when using it!
  
  listOfNames.map((el, ind, arr) => {
    let a = listOfNames[ind].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().includes(filter)) {
      listOfNames[ind].style.display = "";
      } else {
        listOfNames[ind].style.display = "none";
      }
  })
}

input.addEventListener("keyup", myFunction)

})();
