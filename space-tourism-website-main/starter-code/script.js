document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu");
  const nav = document.querySelector(".Navbar");
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  const navLinks = document.querySelectorAll(".Navbar li a");
  navLinks.forEach((link) => {
    if (link.href.includes(window.location.pathname)) {
      link.classList.add("underline");
    }
  });

  //---------------- here if i use an icon in mobile mode:------------------------------------
  const moonIcon = document.querySelector(".star");
  const miniNav = document.querySelector(".mini-nav");
  /*moonIcon.addEventListener('click', () => {
    miniNav.classList.toggle("show");
  });*/
  /*-----------------------------Crew Page--------------------------- */
const dots = document.querySelectorAll(".dot");
const crewPosition = document.querySelector(".position")
const crewName = document.querySelector(".name");
const crewDetails = document.querySelector(".details");
const crewImage = document.querySelector("crew-img");
 
const CrewMembers = [{
            Position :"Commander",
            Name : "Douglas Hurley",
            Details :" Douglas Gerald Hurley is an American engineer, former Marine Corps pilot  and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            imgSrc :"assets/crew/image-douglas-hurley.webp"
          },
          {
            Position:"Pilot",
            Name: "Victor Glover",
            Details:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            imgSrc:"assets/crew/image-victor-glover.webp"
          },
          {
            Position:"Mission Specialist",
            Name: "Mark Shuttleworth",
            Details:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.  Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            imgSrc:"assets/crew/image-mark-shuttleworth.webp"
          },
          {
            Position:"Flight Engineer",
            Name: "Anousheh Ansari",
            Details:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ",
            imgSrc:"assets/crew/image-anousheh-ansari.webp"
          }
]

/*dots.forEach((dot) => {
    dot.addEventListener('click', () =>{
      /*const ID = dot.getattribute("id");
      const member = CrewMembers[`${ID}`];

      crewPosition.textContent = member.Position ;
      crewName.textContent = member.Name ;
      crewDetails.textContent = member.Details;
      crewImage.src = member.imgSrc;    
      dots.forEach(oldDot => oldDot.remove('switchActive'));
       dot.classList.add('switchActive');
       dot.style.width= "300px";
    });
    
    });*/
  // -----------------------------Distenation Page:----------------------------------------------
  const moons = document.querySelectorAll(".mini-nav ul li");

  /*function fetchingEvent(moon) {
    const fetchUrl = `destination-${moon.id}.html`;
    window.location = `destination-${moon.id}.html`;

      fetch(fetchUrl)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);

        const starDiv = document.createElement("div"); //This a new div to hold the retrived data
        starDiv.innerHTML = data; // putting the data in the new div
        starDiv.classList.add("destination-container");
       const starContainer = starDiv.querySelector(".destination-container");
        const starName = starContainer.querySelector("h1").textContent;
        const starImage = starContainer.querySelector(".destination-header img").src;
        const starDescription = starContainer.querySelector("p").textContent;
        const starDistance = starContainer.querySelector(".distance p").textContent;            const starTravelTime = starContainer.querySelector(".time p ").textContent;
       
           destinationContainer.innerHTML = `
                <section class="destination-container">
                
                    <div class="destination-header">
                        <h3> <span>01</span> Pick your destination</h3> 
                        <img  src="${starImage}" alt="${starName}" class="star-image">
                    </div>

                    <div class="distnation-details">
                    <div class="mini-nav">
                        <ul class="star">
                        <li id ="moon">Moon</li>
                        <li id="mars">Mars</li>
                        <li id="europa">Europa</li>
                        <li id="titan">Titan</li>
                        </ul>
                    </div>
                    <h1>${starName}</h1>
                    <p>${starDescription}</p>
                    <div id="distnation-line"></div>

                    <div class="distance-time">
                        <div class="distance">
                            <h4>Avg. distance</h4>
                            <p>${starDistance}</p>
                        </div>
                        <div class="time">
                            <h4>Est. travel time</h4>
                            <p>${starTravelTime}</p>
                        </div>
                    </div>
                    </div>
                </section>
            `;
    //  });

  }

  //Function to handle moon click events
  function MoonsEventListener(moon) {
    switch (moon.id) {
      case "moon":
        fetchingEvent(moon);
        break;
      case "mars":
        fetchingEvent(moon);
        break;
      case "europa":
        fetchingEvent(moon);
        break;
      case "titan":
        fetchingEvent(moon);
        break;
    }
  }*/
  
    // Add event listeners to each moon
  moons.forEach((moon) => {
    moon.addEventListener("click", () => {
       window.location = `destination-${moon.id}.html`;
    });
  });
  });

