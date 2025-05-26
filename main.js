// 1. JS Setup: Log and alert
console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page fully loaded. Welcome to Karur Community Events!");
};

// 2. Event Data Setup
const events = [
  {
    name: "Karur Green Walk",
    date: "2025-06-10",
    location: "Gandhi Park, Karur",
    description: "A community nature walk promoting green practices and environmental awareness.",
    category: "cultural",
    seats: 50
  },
  {
    name: "Youth Talent Showcase",
    date: "2025-06-15",
    location: "Karur Town Hall",
    description: "A platform for young talents to showcase music, dance, and creativity.",
    category: "youth",
    seats: 30
  },
  {
    name: "Tech for All - Workshop",
    date: "2025-06-22",
    location: "Karur Innovation Hub",
    description: "An introductory workshop on basic digital tools and internet safety.",
    category: "tech",
    seats: 20
  }
];

// 3. Filter Events on Search and Category Change
document.getElementById("search").addEventListener("input", filterAndRender);
document.getElementById("category").addEventListener("change", filterAndRender);

function filterAndRender() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category").value;

  const visibleDivs = document.querySelectorAll("div > h3");
  visibleDivs.forEach(h3 => {
    const div = h3.parentElement;
    const eventName = h3.textContent.toLowerCase();
    const eventObj = events.find(e => h3.textContent.includes(e.name));
    const matchCategory = category === "" || (eventObj && eventObj.category === category);
    const matchKeyword = keyword === "" || eventName.includes(keyword);
    
    if (matchCategory && matchKeyword) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

// 4. Register Button Logic
document.querySelectorAll("button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    try {
      const event = events[index];
      const today = new Date();
      const eventDate = new Date(event.date);

      if (eventDate < today) {
        alert("Sorry, this event is in the past.");
        return;
      }

      if (event.seats <= 0) {
        alert("Registration closed. No seats available.");
        return;
      }

      event.seats--;
      alert(`✅ Registered for "${event.name}". Remaining seats: ${event.seats}`);
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Something went wrong while registering.");
    }
  });
});
