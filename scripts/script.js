var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}


// Backend API Connection
fetch("http://13.232.46.251:8000/products")
  .then(response => response.json())
  .then(data => {
      console.log(data);

      data.forEach(item => {
          console.log(item.name);
      });
  })
  .catch(error => {
      console.log(error);
  });
