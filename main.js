//alert("Hi there, Please note that our side is currently under maintainance, some functions are disabled, Thank you. Click ok to continue");


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const jobs = [
  {
    title: "Software Engineer Program",
    image: "images/software-engineer.svg",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "16",
    link: "#",
  },

  {
    title: "Data Scientist Program",
    image: "images/data-scientist.svg",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "13",
    link: "#",
  },

  {
    title: "Administrator Program",
    image: "images/project-manager.svg",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "21",
    link: "#",
  },

  {
    title: "Product Manager Program",
    image: "images/product-manager.svg",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "5",
    link: "#",
  },

  {
    title: "Sales Representative Programs",
    image: "images/sales-representative.svg",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },

  {
    title: "Marketing Program",
    image: "images/marketing-manager.svg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "8",
    link: "#",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Job`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Jobs`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
const inputBox = document.querySelector(".inputSec input");
const startBtn = document.querySelector(".inputBtn");
const test = document.querySelector(".test");
const display = document.getElementById("display");
const noBtn = document.querySelector(".no");

noBtn.addEventListener("click", ()=>{
  test.style.display = "None";
})

inputBox.addEventListener("keyup", ()=>{
  let userData = inputBox.value;
   switch (userData) {
      case"417423":
      test.style.display = "flex";
      display.innerText = "Nomfundo Bridget";
      break;

      case"021475":
      test.style.display = "flex";
      display.innerText = "Anricho Davids";
      break;

      case"900522":
      test.style.display = "flex";
      display.innerText = "Ida Lesebe";
      break;

      case"900234":
      test.style.display = "flex";
      display.innerText = "Keleabetswe Salome";
      break;

      case"901129":
      test.style.display = "flex";
      display.innerText = "Wesley Michael";
      break;

      case"124173":
      test.style.display = "flex";
      display.innerText = "Mattaniah Raymond";
      break;

      case"249831":
      test.style.display = "flex";
      display.innerText = "Thobekile Cele";
      break;

      case"381844":
      test.style.display = "flex";
      display.innerText = "Tyra Elizabeth";
      break;

      case"074471":
      test.style.display = "flex";
      display.innerText = "Fhatani Ndou";
      break;

      case"013488":
      test.style.display = "flex";
      display.innerText = "Ntokazi Nelisiwe";
      break;

      case"145699":
      test.style.display = "flex";
      display.innerText = "Nikiwe Jika";
      break;

      case"981218":
      test.style.display = "flex";
      display.innerText = "Kimberley Nemakonde";
      break;

      case"617323":
      test.style.display = "flex";
      display.innerText = "Sunday Khoza";
      break;

      case"132157":
      test.style.display = "flex";
      display.innerText = "Mokete Sherol";
      break;

      case"279417":
      test.style.display = "flex";
      display.innerText = "Vhahanwele Vanessa";
      break;

      case"260290":
      test.style.display = "flex";
      display.innerText = "Sammer Behrends";
      break;

      case"341987":
      test.style.display = "flex";
      display.innerText = "Princess Zulu";
      break;

      case"349989":
      test.style.display = "flex";
      display.innerText = "Mbonane Ntokozo";
      break;

      case"349141":
      test.style.display = "flex";
      display.innerText = "Norman Jacobs";
      break;

      case"998508":
      test.style.display = "flex";
      display.innerText = "Pilly Myrom";
      break;

      case"889985":
      test.style.display = "flex";
      display.innerText = "Pontso Tsotetsi";
      break;

      case"000889":
      test.style.display = "flex";
      display.innerText = "Maria Mashabela";
      break;

      case"889072":
      test.style.display = "flex";
      display.innerText = "Thato Maimane";
      break;

      case"058951":
      test.style.display = "flex";
      display.innerText = "Nompumelelo Emkhari";
      break;


  default:
    {
      test.style.display = "None";
    }}
})
