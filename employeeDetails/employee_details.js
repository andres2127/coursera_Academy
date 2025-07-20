const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, especialization: 'JavaScript' },
    { id: 2, name: 'Andres Moreno', age: 19, department: 'IT', salary: 100000, especialization: 'Back-End' },
    { id: 3, name: 'Mario Saenz', age: 20, department: 'Marketing', salary: 20000, especialization: 'Videos' },
    { id: 4, name: 'Valen Moreno', age: 27, department: 'HR', salary: 30000, especialization: 'JavaScript' },
  ];
  
  // Función para mostrar todos los empleados
  function displayEmployees() {
    const totalEmployees = employees.map((employee) =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.especialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.especialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.especialization}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No se ha encontrado ningún empleado con este ID';
    }
  }
  
  function findByEspecialization() {
    const javaEmployees = employees.filter(employee => employee.especialization === 'JavaScript');
    const foundEspecialization = javaEmployees.map((employee) => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.especialization}</p>`
    ).join('');    
      document.getElementById('employeesDetails').innerHTML = foundEspecialization;
    }
  