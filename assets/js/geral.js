window.addEventListener('load', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $('.preloader').fadeOut(300);
})




/* // carousel
function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass("hideRight");
  $(prevSecond).prevAll().removeClass().addClass("hideLeft");
} */

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev");
      break;

    case 39: // right
      moveToSelected("next");
      break;

    default:
      return;
  }
  e.preventDefault();
});

$("#carousel div").click(function () {
  moveToSelected($(this));
});

$("#prev").click(function () {
  moveToSelected("prev");
});

$("#next").click(function () {
  moveToSelected("next");
});
// fim carousel


//mudar cor do rodapé
var pg_number = parseInt(window.location.href.split("?")[1].split("=")[1]);
console.log("pg_number:", pg_number);
$("#navbarScroll a").eq(pg_number).addClass("ativo");
$("#navbarScrollingDropdown span").html(
  $("#navbarScroll a").eq(pg_number).text()
);

//alert('URL: '+pg_number);

if (pg_number == 1) {
  document.body.style.backgroundColor = "#fcfcf4";
} else if (pg_number == 2) {
  document.body.style.backgroundColor = "#005154";
} else if (pg_number == 3) {
  document.body.style.backgroundColor = "#f8f0e7";
} else if (pg_number == 4) {
  document.body.style.backgroundColor = "#005154";
} else if (pg_number == 5) {
  document.body.style.backgroundColor = "#f3f4f4";
} else if (pg_number == 6) {
  document.body.style.backgroundColor = "#ebece2";
}
//fim mudar cor do rodapé

