// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }

const dropdowns = document.querySelectorAll(".dropdown")
dropdowns.forEach(el => {
  el.addEventListener("click", () => {
    const menu = el.querySelector(".menu")

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
  }else {
    menu.classList.add("hidden")
  }
  })
})

