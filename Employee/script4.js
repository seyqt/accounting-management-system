const employees = [
  {
    name: "Kween Yasmin",
    id: "1001",
    email: "kweenyasmin@gmail.com",
    image: "https://via.placeholder.com/40?text=KY"
  },
  {
    name: "Mima Sassa",
    id: "1002",
    email: "sassagurl@yahoo.com",
    image: "https://via.placeholder.com/40?text=MS"
  },
  {
    name: "Joel Ravanera",
    id: "1005",
    email: "bossingngani@yahoo.com",
    image: "https://via.placeholder.com/40?text=JR"
  },
  {
    name: "Juana Dela Cruz",
    id: "10012",
    email: "iyakinamp@gmail.com",
    image: "https://via.placeholder.com/40?text=JD"
  },
  {
    name: "Kristine Bernal",
    id: "10010",
    email: "difresyon@gmail.com",
    image: "https://via.placeholder.com/40?text=KB"
  },
  {
    name: "Mimi Yuh",
    id: "1007",
    email: "mimiyuuUuuUhh@gmail.com",
    image: "https://via.placeholder.com/40?text=MY"
  },
  {
    name: "Kween Leng",
    id: "10011",
    email: "lengheart@yahoo.com",
    image: "https://via.placeholder.com/40?text=KL"
  },
  {
    name: "Fred Rich",
    id: "1006",
    email: "matamaanakoha@gmail.com",
    image: "https://via.placeholder.com/40?text=FR"
  }
];

const tbody = document.getElementById("employeeBody");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(emp => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img class="avatar" src="${emp.image}" alt="${emp.name}" /> ${emp.name}</td>
      <td>${emp.id}</td>
      <td>${emp.email}</td>
      <td class="action-icons">
        <span title="Delete">🗑️</span>
        <span title="Edit">✏️</span>
      </td>
    `;
    tbody.appendChild(row);
  });
}

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(keyword) ||
    emp.id.includes(keyword)
  );
  renderTable(filtered);
});

// Initial load
renderTable(employees);
