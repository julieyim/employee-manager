#### Snippet #1  Create Data Payload
__file: dashboard/widgets/employee/index.js__  
```js
    const payload = {
       id:e.currentTarget.dataset.id,
       firstname:e.currentTarget.parentElement.querySelector('#firstname').value.trim(),
       lastname:e.currentTarget.parentElement.querySelector('#lastname').value.trim(),
       salary:e.currentTarget.parentElement.querySelector('#salary').value.trim(),
       vacation:e.currentTarget.parentElement.querySelector('#vacation').value.trim(),
    }
   
      eventManager.handle.dispatchEvent(new CustomEvent('editEmployee', 
      {bubbles:true, 
        detail:{  payload}
      } ));
```

#### Snippet #2: Dispatch Custom Event to the vent manager to send out the payload  
__file: dashboard/widgets/employee/index.js__  
```js
      eventManager.handle.dispatchEvent(new CustomEvent('editEmployee', 
      {bubbles:true, 
        detail:{  payload}
      } ));
```

#### Snippet #3:  Add editEmployee event Listener to the EventManager.  
__file: dashboard/events/EventManager.js__
```js
      handle.addEventListener("editEmployee",  onEditEmployee);
```

#### Snippet #4: call the putRequest function and send it the updateEmployee endpoint URL.  
__file: dashboard/events/EventManager.js__
```js
    const result = await dataFetcher.putRequest(api.updateEmployee, e.detail.payload);
```

#### Snippet #5:  Add the updateEmployee endpoint url to the api module.  
__file: dashboard/api/index.js__
```js
        updateEmployee: `http://localhost:5000/api/departments/employee/update`,
```

#### Snippet #6:  Create an PUT HTTP Request Sending Payload as raw json data.  
__file: utils/dataFetcher.js__
```js
   const requestHeader = new Headers();
   requestHeader.append("Content-Type", "application/json");
   const employeeData = JSON.stringify(data);
 
   const requestObject = {
     method: 'PUT',
     headers: requestHeader,
     body: employeeData,
     redirect: 'follow'
   };
   
     const req = await fetch(url, requestObject)
     const result = await req.text()

```

#### Snippet #7:  Create the /api/departments/update endpoint. Call the updateEmployeeData method
__file: server/routes/departmentRoutes.js__
```js
 router.put('/employee/update', (req, res) =>{
    department.updateEmployeeData(req.body)
    res.send("update employee data");
  })
 
```

#### Snippet #8: Read employee data file extract employee by id and update the object with the payload from client.
__file: server/controllers/Department.js__
```js
updateEmployeeData(data){
      const employees = this.getData()
      const employee = employees.find(employee => employee.id === data.id)
 
       const updatedEmployee = {...employee, ...data}
       
       const newEmployeeData = employees.map(employee =>{
            if(employee.id === data.id){
              return updatedEmployee
            }else{
              return employee
            }
       })
       
      this.writeData(newEmployeeData)
    }
 
```






