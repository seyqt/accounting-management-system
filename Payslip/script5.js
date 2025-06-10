const payslips = [
  {
    name: "Juana Dela Cruz",
    date: "2025-05-08"
  },
  {
    name: "Fred Rich",
    date: "2025-07-01"
  },
  {
    name: "Precious Batumbakal",
    date: "2025-11-13"
  }
];

const tbody = document.getElementById("payslipTable");

function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(p => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.date}</td>
      <td>
        <button class="view">View</button>
        <button class="approve">Approve</button>
        <button class="decline">Decline</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

renderTable(payslips);
