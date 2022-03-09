class Employee {
  constructor(name, id, email, role = "Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  generateCard(extra) {
    return `
<div class="col-sm-6 my-2">
  <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 20rem;">
    <div class="card-body bg-primary rounded text-light">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">
        ${this.role}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${this.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${this.email}">${
      this.email
    }</a></li>
      ${
        this.role === "Manager"
          ? `<li class="list-group-item">Office Number: ${extra}</li>`
          : this.role === "Engineer"
          ? `<li class="list-group-item">Github Account: <a href="https://github.com/${extra}/" target="_blank">${extra}</a></li>`
          : `<li class="list-group-item">School: ${extra}</li>`
      }
    </ul>
  </div>
</div>`;
  }
}

module.exports = Employee;
