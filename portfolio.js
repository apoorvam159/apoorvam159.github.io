fetch('data/projects.json')
    .then(response => response.json())
    .then(data => displayProjects(data));

function displayProjects(projects) {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="button1">Read More!</a>
            <img src="${project.image}" alt="${project.name}">
            `;
        projectContainer.appendChild(projectElement);
    });
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}