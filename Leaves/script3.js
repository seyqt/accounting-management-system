const leaveData = [
  {
    employee: "Juana Dela Cruz",
    from: "2025-05-08",
    to: "2025-05-11",
    days: 3,
    reason: "Sick Leave"
  },
  {
    employee: "Fred Rich",
    from: "2025-07-01",
    to: "2025-07-06",
    days: 5,
    reason: "SIL Leave"
  },
  {
    employee: "Precious Batumbakal",
    from: "2025-11-13",
    to: "2025-11-17",
    days: 4,
    reason: "Maternity Leave"
  }
];

const tbody = document.getElementById("leave-body");
const entriesSelect = document.getElementById("entries");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageIndicator = document.getElementById("page-indicator");
const entryInfo = document.getElementById("entry-info");

let currentPage = 1;
let entriesPerPage = parseInt(entriesSelect.value);

function renderTable() {
  tbody.innerHTML = "";

  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const currentData = leaveData.slice(start, end);

  currentData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.employee}</td>
      <td>${row.from}</td>
      <td>${row.to}</td>
      <td>${row.days}</td>
      <td>${row.reason}</td>
      <td class="action-icons">
        <span title="Delete">🗑️</span>
        <span title="View">👁️</span>
      </td>
    `;
    tbody.appendChild(tr);
  });

  pageIndicator.textContent = currentPage;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = end >= leaveData.length;
  entryInfo.textContent = `Showing ${start + 1} to ${Math.min(end, leaveData.length)} of ${leaveData.length} entries`;
}

entriesSelect.addEventListener("change", () => {
  entriesPerPage = parseInt(entriesSelect.value);
  currentPage = 1;
  renderTable();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

nextBtn.addEventListener("click", () => {
  if ((currentPage * entriesPerPage) < leaveData.length) {
    currentPage++;
    renderTable();
  }
});

renderTable();
