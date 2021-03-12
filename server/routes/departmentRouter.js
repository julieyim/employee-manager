const express = require('express');
const Department = require('../controllers/Department');
 

// Router   handle req/res http verbs
const router = express.Router();
const department = new Department('../data/employees.json')


//commonjs modules 
module.exports = ()=>{
    // list of departments
    router.get('/', (req, res)=>{
        res.send(department.getDepartments())
    })

    // Single Department By Name
    router.get('/name/:name', (req, res)=>{  
        res.send(department.getDepartment(req.params.name))
    })

    // Remove An Employee From A Department
    router.delete('/employee/id/:id', (req, res)=>{
        department.delteEmployeeById(req.params.id)
        res.send({"id":req.params.id});
    })

    router.put('/employee/update', (req, res) =>{

        department.updateEmployeeData(req.body)
        res.send("update employee data");
    })

    router.get('/reset', (req, res)=>{
        department.resetDepartmentData()
        res.send('reset the employee data')
    })

    return router
}