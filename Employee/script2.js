const employees = [
  { name: "Kween Yasmin", role: "Graphic Designer", img: "https://via.placeholder.com/80?text=Y" },
  { name: "Mima Sassa", role: "IOS Developer", img: "https://via.placeholder.com/80?text=M" },
  { name: "Joel Ravanera", role: "Web Designer", img: "https://via.placeholder.com/80?text=J" },
  { name: "Juana Dela Cruz", role: "Web Developer", img: "https://via.placeholder.com/80?text=J" },
  { name: "Kristine Bernal", role: "Android Developer", img: "https://via.placeholder.com/80?text=K" },
  { name: "Mimi Yuh", role: "Web Developer", img: "https://via.placeholder.com/80?text=M" }
];

const grid = document.getElementById("employeeGrid");
const searchInput = document.getElementById("searchInput");
const positionFilter = document.getElementById("positionFilter");

function displayEmployees(list) {
  grid.innerHTML = "";
  list.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <div class="options">⋮</div>
      <img src="${emp.img}" alt="${emp.name}">
      <h4>${emp.name}</h4>
      <p>${emp.role}</p>
    `;
    grid.appendChild(card);
  });
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const position = positionFilter.value;

  const filtered = employees.filter(emp => {
    const matchesName = emp.name.toLowerCase().includes(query);
    const matchesRole = position === "Position" || emp.role === position;
    return matchesName && matchesRole;
  });

  displayEmployees(filtered);
});

displayEmployees(employees);
