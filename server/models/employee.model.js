const sql = require('./connection');

const Employee = employee => {
  this.username = employee.username;
  this.password = employee.password;
  this.name = employee.name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.role = employee.role;
  this.created = employee.created;
  this.active = employee.active;
};

Employee.getAll = result => {
  sql.query('SELECT * FROM employees', (err, res) => {
    if (err) {
      console.error(err);
      result(null, err);
      return;
    }
    console.log(res);
    result(null, res);
  });
};
