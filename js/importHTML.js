// <script src="deferMe.js" defer></script>
(function () {

    function importHTML() {
      let tagsRepl = document.querySelectorAll('[w3-include-HTML]');
  
      tagsRepl.forEach(function (element) {
         file = element.getAttribute("w3-include-html");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            let newEl=document.createElement("div");
            newEl.innerHTML = xhttp.responseText;
            element.parentNode.replaceChild(newEl.firstChild, element);
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
      });
    }
  
    importHTML();
  })();