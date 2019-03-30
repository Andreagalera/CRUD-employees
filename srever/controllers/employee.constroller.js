const Employee= require('../models/employee');

const employeeCtrl = {};

//GET employees
employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees)
};

//GET employee
employeeCtrl.getEmployee =  async (req, res) => {
    console.log(req.params.id);
    const employee = await Employee.findById(req.params.id);
    res.json(employee);

};

//POST employee
employeeCtrl.createEmployee =  async (req, res) => {
    const employee= new Employee(req.body);
    console.log(employee);
    await employee.save();
    res.json({
        'status': 'Employee guardado'
    });
};

//PUT employee
employeeCtrl.editEmployee =  async (req, res) => {
    //Employee.findByIdAndUpdate(req.params.id)
    const {id } =req.params;
    const employee= {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee actualizado'});
};

//DELETE employee
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ status: 'Employee eliminado'});

};

module.exports = employeeCtrl;