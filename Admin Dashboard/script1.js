const projects = [
  { name: 'Modern Branding Kit for', progress: 80 },
  { name: 'Mobile App UI/UX Concep', progress: 65 },
  { name: 'Weather Dashboard: Fetcl', progress: 90 },
  { name: 'Full Stack E-Commerc...', progress: 50 }
];

const tableBody = document.getElementById('project-list');

projects.forEach(project => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${project.name}</td>
    <td>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${project.progress}%;"></div>
      </div>
    </td>
    <td><button>⋮</button></td>
  `;

  tableBody.appendChild(row);
});
