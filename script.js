function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
 };

  var lowerSlider = document.querySelector('#lower');
  var  upperSlider = document.querySelector('#upper');
  
  document.querySelector('#two').value=upperSlider.value;
  document.querySelector('#one').value=lowerSlider.value;
  
  var  lowerVal = parseInt(lowerSlider.value);
  var upperVal = parseInt(upperSlider.value);
  
  upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
  
      if (upperVal < lowerVal + 4) {
          lowerSlider.value = upperVal - 4;
          if (lowerVal == lowerSlider.min) {
          upperSlider.value = 4;
          }
      }
      document.querySelector('#two').value=this.value
  };
  
  lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
      if (lowerVal > upperVal - 4) {
          upperSlider.value = lowerVal + 4;
          if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
          }
      }
      document.querySelector('#one').value=this.value
  }; 

var modal = document.getElementById("adding_credit");

var btn = document.getElementById("add_credit");

var span = document.getElementsByClassName("close_button")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pdp_page_slider");
  let dots = document.getElementsByClassName("pdp_page_slider_demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}