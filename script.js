function toggleMoments() {
  const momentsDiv = document.getElementById("moments");
  if (momentsDiv.style.display === "none") {
    momentsDiv.style.display = "block";
  } else {
    momentsDiv.style.display = "none";
  }
}

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
}

// Adaugă stilurile pentru temele albă și neagră
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .light-theme {
      background-color: white;
      color: black;
    }
    .dark-theme {
      background-color: black;
      color: white;
    }
  `;
  document.head.appendChild(style);

  // Setează tema implicită
  document.body.classList.add("light-theme");
});

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .light-theme {
      background-color: white;
      color: black;
    }
    .dark-theme {
      background-color: #3d3b3a;
      color: white;
    }
  `;
  document.head.appendChild(style);

  // Setează tema implicită
  document.body.classList.add("light-theme");
});

document.addEventListener("DOMContentLoaded", () => {
  // Creează butonul de comutare a temei
  const toggleButton = document.createElement("button");
  toggleButton.id = "theme-toggle";
  toggleButton.innerHTML = "&#9728;"; // Simbol pentru soare (temă albă)
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "20px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.backgroundColor = "#3d3b3a";
  toggleButton.style.color = "white";
  toggleButton.style.fontSize = "16px";

  // Adaugă funcționalitatea de comutare a temei
  toggleButton.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      toggleButton.innerHTML = "&#9728;"; // Simbol pentru soare
      toggleButton.style.backgroundColor = "#3d3b3a";
      toggleButton.style.color = "white";
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      toggleButton.innerHTML = "&#9790;"; // Simbol pentru lună
      toggleButton.style.backgroundColor = "white";
      toggleButton.style.color = "#3d3b3a";
    }
  });

  // Adaugă butonul în document
  document.body.appendChild(toggleButton);

  // Adaugă stilurile pentru temele albă și neagră
  const style = document.createElement("style");
  style.textContent = `
    .light-theme {
      background-color: white;
      color: black;
    }
    .dark-theme {
      background-color: #3d3b3a;
      color: white;
    }
  `;
  document.head.appendChild(style);

  // Setează tema implicită
  document.body.classList.add("light-theme");
});
