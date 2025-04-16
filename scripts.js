/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const CORI_THE_MVP_URL =
  "https://www.ucdavis.edu/sites/default/files/media/images/cori-with-footballs-vertical-uc-davis.jpg";
const CORI_THE_MVP_URL_2 =
"https://www.ucdavis.edu/sites/default/files/media/images/cori-at-football-game-2000.jpg";
const CORI_THE_MVP_URL_3 =
"https://www.ucdavis.edu/sites/default/files/media/images/cori-meeting-red-2000px-uc-davis.jpg";
const CORI_THE_MVP_URL_4 =
"https://bloximages.chicago2.vip.townnews.com/davisenterprise.com/content/tncms/assets/v3/editorial/6/a2/6a289613-905b-5dcf-97e8-68bc2a8883c8/64b8544108f0f.image.jpg?resize=200%2C267";


const CHEETO_URL =
  "https://localwiki.org/media/cache/8a/5c/8a5cee3ca2abc90ce86363a595e8222a.png";
const CHEETO_URL_2 =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgOA28sf6w5eAO3CfdtTx67cZmGWsQmmBM3Aa9W6Qmfc9ricr2MeGAyxSXS4twupqu8Q&usqp=CAU"
const CHEETO_URL_3 =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm71jV9XSg6BoObrC_uBgu7Zq55H--eY8O4w&s"
const CHEETO_URL_4 = 
"https://www.ucdavis.edu/sites/default/files/magazine/Cheeto-web-header.jpg"


const COWS_URL =
  "https://theaggie.org/wp-content/uploads/2021/04/feedingcows_ca_JUSTIN_HAN-1.jpg";
const COWS_URL_2 =
" https://caes.ucdavis.edu/sites/g/files/dgvnsk1721/files/styles/sf_landscape_16x9/public/images/article/20190221-mitloehner-frank-10.jpg?h=b3660f0d&itok=Q_u-vDmh";
const COWS_URL_3 =
"https://publicengagement.ucdavis.edu/sites/g/files/dgvnsk5056/files/styles/sf_landscape_16x9/public/media/images/Ermias_Kebreab.png?h=c74750f6&itok=6An2uaWZ";
const COWS_URL_4 =
"https://theaggie.org/wp-content/uploads/2021/05/bodcows_fe_ANNA_HJARTOY-1.jpg";

const GOATS_URL =
"https://animalscience.ucdavis.edu/sites/g/files/dgvnsk446/files/styles/sf_slideshow_full/public/gallery-2018-08/facility-goats-02-1000x450.jpg?h=9624e4e4&itok=7qno-6xc";
const GOATS_URL_2 =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9WLkqeLV3mrr8-DEx570RMZk7msSySqrxnEDCpLw-P7cNDQHDEvTl_jNBespB4ZbUsg&usqp=CAU";
const GOATS_URL_3 =
"https://animalscience.ucdavis.edu/sites/g/files/dgvnsk446/files/styles/sf_landscape_16x9/public/media/images/ucd-goats2_0.jpg?h=1bcf3232&itok=KBOz5vM0";

const TURKEY_URL =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN43yhmdriUvhdpufxVabHKHhPKGbNtG8ug&s";
const TURKEY_URL_2 =
"https://pbs.twimg.com/media/FE-PF-yVQAY_U1R.jpg";
const TURKEY_URL_3 =
"https://bloximages.chicago2.vip.townnews.com/davisenterprise.com/content/tncms/assets/v3/editorial/2/e4/2e4827a1-a109-5dcb-95db-9249396f037f/64b4bfb2e6e22.image.jpg?crop=1748%2C918%2C0%2C133&resize=1200%2C630&order=crop%2Cresize";
const TURKEY_URL_4 =
"https://theaggie.org/wp-content/uploads/2016/11/aggroturkey_ci_Ariel_Robbins.jpg";

const HORSE_URL =
"https://animalscience.ucdavis.edu/sites/g/files/dgvnsk446/files/styles/sf_landscape_4x3/public/images/marketing_highlight/news-mclean-santa-cruz-horses_0.jpg?h=c673cd1c&itok=vxg-AKR1";
const HORSE_URL_2 =
"https://theaggie.org/wp-content/uploads/2017/01/horses_fe_Cat_Taylor.jpg";
const HORSE_URL_3 =
"https://www.dailydemocrat.com/wp-content/uploads/migration/2018/201801/NEWS_180119935_AR_0_SUSRMEKDTYVH.jpg?w=620";
const HORSE_URL_4 =
"https://paulickreport.com/.image/t_share/MjA4MDk5OTU5MTY4MzEyOTc2/tenacious-candy_1.jpg";



// This is an array of data 
let petData = [
  {
    title: "Cori THE MVP",
    image: CORI_THE_MVP_URL,
    facts: ["Loves football", "Campus celebrity", "Leader of Aggies Football", ],
    paragraph: [
      "Meet Cori, UC Davis’s most valuable pet and campus star. Cori isn’t just any pet, she’s the heart and soul of the Aggie community, beloved by students, faculty, and staff alike.",
      
      "With her playful personality, boundless energy, and loving nature, Cori has become a fixture on campus. You’ll find her running across the Quad, greeting passersby with a wag of her tail, or cuddled up in her favorite spot near the library.",
      
      "Cori is especially famous for her energetic appearances at UC Davis football games. During each game, she can be seen sprinting across the field, running through the stands, and cheering on the Aggies with her signature enthusiasm. Her presence adds an extra spark to the already high-energy atmosphere, making her a crowd favorite.",
      
      "Cori has earned the title of 'MVP' through her positive influence on campus life. Her presence has been known to lift spirits, reduce stress, and remind us all of the importance of love, joy, and companionship in our busy academic lives.",
      
      "Students love to take breaks with Cori, whether it’s a quick pet session or simply sitting by her while studying. She’s become a living reminder that sometimes, all you need is a little pause to recharge and refocus.",
      
      "Cori’s charm is undeniable, and as UC Davis’s unofficial mascot, she continues to inspire a sense of community and warmth wherever she goes."
    ],
    photos: [CORI_THE_MVP_URL, CORI_THE_MVP_URL_2, CORI_THE_MVP_URL_3, CORI_THE_MVP_URL_4]
  },
  {
    title: "Cheeto the Physics Cat",
    image: CHEETO_URL,
    facts: ["Lives in the physics building", "Highest rated Professor",],
    paragraph: [
      "Meet Cheeto, UC Davis’s Orange Feline Celebrity. If you've ever wandered around the UC Davis campus, chances are you've heard of or even spotted Cheeto, the campus’s most famous furry resident. With his striking orange coat, chill demeanor, and undeniable charisma, Cheeto has stolen the hearts of students, faculty, and visitors alike.",
      
      "Cheeto isn’t just a cat. He’s a Davis legend. Often seen lounging in lecture halls, sunbathing near the library, or strutting around the dorms like he owns the place, Cheeto embodies the true Aggie spirit: curious, friendly, and always down to vibe.",
      
      "In fact, Cheeto has earned a reputation that's practically academic. He’s received a stellar rating on RateMyProfessor, proving that he’s not only a campus favorite but also an unofficial 'professor' in his own right. Students adore him, often leaving glowing reviews that highlight his calming presence and perfect study buddy vibes.",
      
      "Whether you're having a stressful day or just need a little joy, a Cheeto sighting always feels like a good omen. Students snap selfies with him, share sightings on social media, and even celebrate him with stickers and merch.",
      
      "UC Davis has an unofficial mascot, and his name is Cheeto."
    ],
    photos: [CHEETO_URL, CHEETO_URL_2, CHEETO_URL_3, CHEETO_URL_4]
  },
  {
    title: "Our Beloved Cows",
    image: COWS_URL,
    facts: ["Famous next door neighbors",],
    paragraph: [
      "UC Davis is home to some iconic residents, none more famous than the cows that roam the campus. These gentle giants are a symbol of the university's agricultural legacy and connection to the land.",
      
      "The cows are often seen grazing near the dairy facilities, reminding everyone of UC Davis’s focus on sustainable farming and animal care. For many students, spotting a cow on campus is a classic Aggie experience.",
      
      "One thing you can always count on near the dairy facilities is the unmistakable smell. For some, it's a reminder of the campus's agricultural heart, while for others, it’s a comforting scent that feels like home. Many students joke that it’s the true mark of being at UC Davis.",
      
      "Fun fact: UC Davis has one of the largest university-based dairy operations in the country. The cows are part of ongoing research into dairy farming, milk production, and sustainable agriculture.",
      
      "The dairy herd includes a variety of breeds like Holstein, Jersey, and Ayrshire, each with unique traits from the Holstein’s black-and-white markings to the Jersey’s creamy milk.",
      
      "Students often take photos with the cows or simply enjoy watching them, finding peace in their calm demeanor. The cows have become a symbol of the connection to the campus’s agricultural roots.",
      
      "These cows are a beloved part of UC Davis, embodying the balance of tradition, education, and the natural world that makes this campus special."
    ],
    
    photos: [COWS_URL, COWS_URL_2, COWS_URL_3, COWS_URL_4]
  },
  {
    title: "The GOATS of teaching",
    image: GOATS_URL,
    facts: ["Largest for agricultural studies", "Stiffens and falls when startled"],
    paragraph: [ "UC Davis is home to a delightful herd of goats, known for their important role in both research and campus life. These goats are often seen as part of the university’s commitment to agricultural education and sustainable practices.",

      "You can often spot goats grazing on campus, where they naturally help control vegetation and reduce fire risks, making them key players in the campus's sustainability efforts. For many students, encountering a goat is a fun and memorable experience.",
      
      "These goats are also involved in several unique events on campus, such as Goat Yoga, where students practice yoga while the goats roam around. It's a popular activity that combines relaxation and animal interaction.",
      
      "Fun fact: UC Davis is home to a variety of goats, including the famous fainting goats, which stiffen and fall over when startled, creating a funny spectacle.",
      
      "The goats also play a role in educational programs related to animal behavior, nutrition, and veterinary science, offering students valuable hands-on experience with livestock management.",
      
      "The herd has become a beloved part of the UC Davis community, representing both the university's agricultural roots and its commitment to sustainable farming and animal care.",
      
      "These goats embody the spirit of UC Davis: a mix of tradition, innovation, and a deep connection to the natural world." ],
      photos: [GOATS_URL, GOATS_URL_2, GOATS_URL_3]
  },
  {
    title: "The wild turkeys",
    image: TURKEY_URL,
    facts: ["Campus Residents: Wild turkeys roam the UC Davis campus", "Unique Visitors: Sometimes spotted in the middle of campus or near parking lots", "Popular Among Students: Often seen as a fun and quirky part of campus life"],
    paragraph: [ "UC Davis is home to a quirky group of residents—wild turkeys—that have a habit of stopping and admiring their own reflection. These turkeys are often seen gazing at themselves in windows, car mirrors, or any reflective surface they can find around campus.",

      "Their fascination with reflections adds to their playful nature and is a fun sight for students. It's not uncommon to spot a turkey pecking at or strutting in front of a shiny surface, seemingly mesmerized by its own image.",
      
      "This behavior is part of the turkeys’ social interactions and territorial instincts, as they may perceive their reflection as another turkey. It’s a mix of curiosity and self-awareness that makes them even more entertaining to watch.",
      
      "Fun fact: This reflection obsession has made the turkeys a bit of a campus celebrity, with many students taking photos of the birds interacting with their own reflections.",
      
      "Whether they’re strutting in front of a car or peering into a building window, the turkeys’ self-adoration has become a charming and amusing part of UC Davis's wildlife scene.",
      
      "These turkeys, with their curious nature and love for reflections, bring a touch of humor and personality to the campus, making them a beloved and unforgettable part of the UC Davis experience." ],
    photos: [TURKEY_URL, TURKEY_URL_2, TURKEY_URL_3, TURKEY_URL_4],

  },
  {
    title: "The Stallions",
    image:HORSE_URL,
    facts: ["key part of the research and education at the UC Davis Veterinary Teaching Hospital.", "involved in studies on equine health, behavior, and veterinary treatments."],
    paragraph: [ "UC Davis is home to a strong equine presence, with horses playing a significant role in the university's veterinary, animal science, and agricultural programs. These majestic animals are integral to the UC Davis Veterinary Teaching Hospital, where they are involved in both research and hands-on education for students training to become veterinarians.",

      "Beyond the classroom, horses are occasionally seen around campus during special events or university-related activities, adding to the charm of campus life. The Davis Horse Stables provide a space where students can engage in equestrian activities, from casual riding to competitive events through the active equestrian club.",
      
      "UC Davis also supports therapeutic riding programs, using horses to help individuals with disabilities, showcasing the campus's commitment to community well-being. Additionally, the university conducts important research on equine health and behavior, making horses an essential part of ongoing studies.",
      
      "These horses, with their graceful presence and involvement in various programs, are a living symbol of UC Davis's agricultural roots and its dedication to advancing the fields of veterinary care and animal science." ],
    photos: [HORSE_URL, HORSE_URL_2, HORSE_URL_3, HORSE_URL_4],
  }

];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < petData.length; i++) {
    const { title, image, facts, paragraph, photos } = petData[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, title, image, facts);
    cardContainer.appendChild(nextCard);

    nextCard.removeEventListener("click", handleDeleteCard);
    nextCard.removeEventListener("click", showOverlay);

    if(deleteMode) {
      nextCard.addEventListener("click", handleDeleteCard);
    } else {
      nextCard.addEventListener("click", () => {
        showOverlay(title, paragraph, photos);
      });
    }
  }
};

function editCardContent(card, newTitle, newImageURL, facts) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const list = card.querySelector("ul");
  list.innerHTML = ""; 
  facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    list.appendChild(li);
  });
};


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


function showOverlay(title, paragraph, photos) {
  document.getElementById("overlay-title").textContent = title;
  document.getElementById("carousel-image").src = photos[0]; 
  
  const factList = document.getElementById("overlay-facts");
  factList.innerHTML = "";

  const paragraphElement = document.getElementById("overlay-paragraph");
  paragraphElement.textContent = paragraph.join(" ");

  currentPhotoIndex = 0;
  currentPhotos = photos;

  updateCarouselImage(); 
  document.getElementById("overlay").style.display = "flex";
  document.body.classList.add("no-scroll");
  document.body.classList.add("yes-scroll");
};


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("close-overlay").addEventListener("click", function (){
    document.getElementById("overlay").style.display = "none";
  });
  document.getElementById("prev").addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    updateCarouselImage();
  })
  
  document.getElementById("next").addEventListener("click", ()=> {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    updateCarouselImage();
  })


});

let currentPhotoIndex = 0;
let currentPhotos = [];

function updateCarouselImage(){
  document.getElementById("carousel-image").src = currentPhotos[currentPhotoIndex];
};

document.getElementById("open-form-btn").addEventListener("click", () => {
  document.getElementById("pet-form-overlay").style.display = "flex";
});

document.getElementById("close-form-btn").addEventListener("click", () =>{
  document.getElementById("pet-form-overlay").style.display = "none";
});

document.getElementById("pet-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("pet-name").value.trim();
  const image = document.getElementById("pet-image").value.trim();
  const facts = document.getElementById("pet-facts").value.split(",").map(f => f.trim());
  const paragraph = document.getElementById("pet-description").value.split("|").map(p => p.trim());
  const photos = document.getElementById("pet-photos").value.split(",").map(p => p.trim());

  const newPet = {
    title: name,
    image: image,
    facts: facts,
    paragraph: paragraph,
    photos: photos
  };

  petData.push(newPet);
  showCards();
  document.getElementById("pet-form").reset();
  document.getElementById("pet-form-overlay").style.display = "none";
});

let deleteMode = false;

document.getElementById("delete-mode-btn").addEventListener("click", () => {
  deleteMode = !deleteMode;
  document.body.classList.toggle("delete-mode", deleteMode);
  document.getElementById("delete-mode-btn").textContent = deleteMode ? "Exit Delete Mode" : "Delete Mode";
  
  showCards(); 
});

function handleDeleteCard(e) {
  const card = e.currentTarget;

  if(card.classList.contains("template")) return;

  const title = card.querySelector("h2").textContent;
  const confirmDelete = confirm('delete "${title}"?');
  
  if(confirmDelete) {
    card.remove();

    petData= petData.filter(pet => pet.title !== title);
    showCards();
  }
}
