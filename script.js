// Sample Data (Replace with API calls to your bot's backend)
const profiles = [
  {
    name: "Ahmed",
    age: 25,
    bio: "مهندس برمجيات",
    distance: "2.3 كم",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Sara",
    age: 30,
    bio: "طبيبة",
    distance: "5.7 كم",
    photo: "https://via.placeholder.com/150",
  },
];

const adminProfiles = [
  {
    name: "Ahmed",
    age: 25,
    bio: "مهندس برمجيات",
    location: "30.0444,31.2357",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Sara",
    age: 30,
    bio: "طبيبة",
    location: "30.0444,31.2357",
    photo: "https://via.placeholder.com/150",
  },
];

// Load Profiles
function loadProfiles() {
  const profilesContainer = document.querySelector(".profiles-container");
  profilesContainer.innerHTML = "";

  profiles.forEach((profile) => {
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    profileCard.innerHTML = `
      <img src="${profile.photo}" alt="Profile Photo" class="profile-photo">
      <div class="profile-info">
        <h2 class="profile-name">${profile.name}</h2>
        <p class="profile-age">${profile.age} سنة</p>
        <p class="profile-bio">${profile.bio}</p>
        <p class="profile-distance">${profile.distance}</p>
      </div>
      <div class="profile-actions">
        <button class="like-button">👍</button>
        <button class="dislike-button">👎</button>
      </div>
    `;

    profilesContainer.appendChild(profileCard);
  });
}

// Load Admin Profiles
function loadAdminProfiles() {
  const adminProfilesList = document.getElementById("admin-profiles-list");
  adminProfilesList.innerHTML = "";

  adminProfiles.forEach((profile) => {
    const adminProfile = document.createElement("div");
    adminProfile.className = "admin-profile";

    adminProfile.innerHTML = `
      <img src="${profile.photo}" alt="Profile Photo" class="profile-photo">
      <div class="profile-info">
        <h2 class="profile-name">${profile.name}</h2>
        <p class="profile-age">${profile.age} سنة</p>
        <p class="profile-bio">${profile.bio}</p>
        <p class="profile-location"><a href="https://www.google.com/maps?q=${profile.location}" target="_blank">فتح في خرائط جوجل</a></p>
      </div>
      <div class="admin-actions">
        <button class="ban-button">❌ حظر</button>
        <button class="freeze-button">❄️ تجميد</button>
        <button class="promote-button">⭐ ترقية</button>
      </div>
    `;

    adminProfilesList.appendChild(adminProfile);
  });
}

// Open Admin Panel
document.getElementById("admin-panel").addEventListener("click", () => {
  const modal = document.getElementById("admin-panel-modal");
  modal.style.display = "flex";
  loadAdminProfiles();
});

// Close Admin Panel
document.getElementById("close-admin-panel").addEventListener("click", () => {
  const modal = document.getElementById("admin-panel-modal");
  modal.style.display = "none";
});

// Load Profiles on Page Load
window.onload = () => {
  loadProfiles();
};
