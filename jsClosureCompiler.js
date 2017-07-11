var filterList = function(h, k) {
  var d = "abcdefghijklmnopqrstuvwxyz".split("");
  document.getElementById(h).addEventListener("keyup", function(e) {
    for (var f = 0, a = 0; a < d.length; a++) {
      for (var g = 0, b = document.querySelectorAll("ul li." + k + "#" + d[a] + " a"), c = 0; c < b.length; c++) {
        -1 < b[c].innerHTML.toLowerCase().indexOf(e.target.value.toLowerCase()) ? b[c].parentNode.style.display = "" : (b[c].parentNode.style.display = "none", g++);
      }
      g == b.length ? (document.getElementById(d[a]).style.display = "none", f++) : document.getElementById(d[a]).style.display = "";
    }
    document.getElementById("default-message").style.display = 26 == f ? "" : "none";
  });
};