var mapPopup = document.querySelector(".map");
var link = document.querySelector(".btn");
var popup = document.querySelector(".search-form");
 link.addEventListener("click", function(event) {
        event.preventDefault();
         popup.classList.toggle("search-form-show");
      });
