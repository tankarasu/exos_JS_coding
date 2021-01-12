
// Creation et ajout d'un boutton "close" sur chaque élément de la liste 
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Cacher un élément de la liste lorsque le boutton "close" est cliqué 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Ajouter un symbole "coché" en cliquant sur un élément de la liste
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creation d'un nouvel élément de la liste lorsque le boutton "add" est cliqué
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("theList").appendChild(li);
    document.getElementById("myInput").value = "";
  }
  document.getElementById("theList").value = "";
  

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      //var div = this.parentElement;  //fait référence au span(bouton close) d'un élément de la liste bien précis 
      this.parentElement.style.display = "none";
    }
  }
}
