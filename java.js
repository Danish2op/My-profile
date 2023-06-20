window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
  
    if (window.scrollY > 0) {
      navbar.classList.add("black");
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("black");
    }
  });
  