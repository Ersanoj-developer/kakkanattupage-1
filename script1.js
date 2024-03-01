// Sample data for demonstration
const data = [
    { name: " Sr. Anchala CMC", photo: "images/Priest/Ayavana Unit/1.jpg" },
    { name: "Jane Smith", photo: "images/nagapuzha/Mathai Edassey (Vice President).jpg" },
    // Add more data as needed
];

// Function to create cards dynamically
function createCards() {
    const cardContainer = document.getElementById("cardContainer");

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.photo;
        img.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        card.appendChild(img);
        card.appendChild(name);

        cardContainer.appendChild(card);
    });
}

// Call the function to create cards when the page loads
document.addEventListener("DOMContentLoaded", createCards);
