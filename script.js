// sticky
window.onscroll = function () {
  stickyFunction();
}

var pageTitle = document.getElementById('page-title-background');

var sticky = pageTitle.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    pageTitle.classList.add('sticky');
  } else {
    pageTitle.classList.remove('sticky');
  }
}


// GET YOUR FAVORITE - TAB FUNCTION
function openTab(evt, openTab, textDetail, e) {
  // Declare all variables
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("gyf-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("gyf-btn");
  for (i = 0; i < tabcontent.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(openTab).style.display = "grid";
  evt.currentTarget.className += " active";
}


