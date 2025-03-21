// API Endpoints (Replace with your bot's backend URLs)
const API_BASE_URL = "https://t.me/Ta7digaBot/Ta7diga";
const PROFILES_ENDPOINT = `${API_BASE_URL}/profiles`;
const ADMIN_PROFILES_ENDPOINT = `${API_BASE_URL}/admin/profiles`;

// Fetch Profiles
async function fetchProfiles() {
  try {
    const response = await fetch(PROFILES_ENDPOINT);
    if (!response.ok) throw new Error("Failed to fetch profiles");
    return await response.json();
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }
}

// Fetch Admin Profiles
async function fetchAdminProfiles() {
  try {
    const response = await fetch(ADMIN_PROFILES_ENDPOINT);
    if (!response.ok) throw new Error("Failed to fetch admin profiles");
    return await response.json();
  } catch (error) {
    console.error("Error fetching admin profiles:", error);
    return [];
  }
}

// Load Profiles
async function loadProfiles() {
  const profilesContainer = document.querySelector(".profiles-container");
  profilesContainer.innerHTML = "";

  const profiles = await fetchProfiles();

  profiles.forEach((profile) => {
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    profileCard.innerHTML = `
      <img src="${profile.photo}" alt="Profile Photo" class="profile-photo">
      <div class="profile-info">
        <h2 class="profile-name">${profile.name}</h2>
        <p class="profile-age">${profile.age} سنة</p>
        <p class="profile-bio">${profile.bio}</p>
        <p class="profile-distance">${profile.distance} كم</p>
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
async function loadAdminProfiles() {
  const adminProfilesList = document.getElementById("admin-profiles-list");
  adminProfilesList.innerHTML = "";

  const adminProfiles = await fetchAdminProfiles();

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
        <button class="ban-button" data-user-id="${profile.id}">❌ حظر</button>
        <button class="freeze-button" data-user-id="${profile.id}">❄️ تجميد</button>
        <button class="promote-button" data-user-id="${profile.id}">⭐ ترقية</button>
      </div>
    `;

    adminProfilesList.appendChild(adminProfile);
  });

  // Add event listeners for admin actions
  document.querySelectorAll(".ban-button").forEach((button) => {
    button.addEventListener("click", () => banUser(button.dataset.userId));
  });

  document.querySelectorAll(".freeze-button").forEach((button) => {
    button.addEventListener("click", () => freezeUser(button.dataset.userId));
  });

  document.querySelectorAll(".promote-button").forEach((button) => {
    button.addEventListener("click", () => promoteUser(button.dataset.userId));
  });
}

// Ban User
async function banUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/ban/${userId}`, { method: "POST" });
    if (!response.ok) throw new Error("Failed to ban user");
    alert("User banned successfully");
    loadAdminProfiles(); // Refresh admin profiles
  } catch (error) {
    console.error("Error banning user:", error);
    alert("Failed to ban user");
  }
}

// Freeze User
async function freezeUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/freeze/${userId}`, { method: "POST" });
    if (!response.ok) throw new Error("Failed to freeze user");
    alert("User frozen successfully");
    loadAdminProfiles(); // Refresh admin profiles
  } catch (error) {
    console.error("Error freezing user:", error);
    alert("Failed to freeze user");
  }
}

// Promote User
async function promoteUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/promote/${userId}`, { method: "POST" });
    if (!response.ok) throw new Error("Failed to promote user");
    alert("User promoted successfully");
    loadAdminProfiles(); // Refresh admin profiles
  } catch (error) {
    console.error("Error promoting user:", error);
    alert("Failed to promote user");
  }
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
