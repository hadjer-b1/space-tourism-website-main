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

  // here if i use an icon in mobile mode:
  const moonIcon = document.querySelector(".star");
  const miniNav = document.querySelector(".mini-nav");
  moonIcon.addEventListener("click", () => {
    miniNav.classList.toggle("show");
  });

  // -----------------------------Distenation:
  const destinationContainer = document.querySelector(".destination-container");
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
