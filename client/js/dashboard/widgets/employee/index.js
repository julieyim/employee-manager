import renderTemplate from "../../../utils/renderTemplate";
import renderToElement from "../../../utils/renderToElement";
import {employeeTemplate, employeeContainerTemplate} from "./employeeTemplates";
import EventManager from '../../events/EventManager'

const eventManager = EventManager.getInstance();

const employee = function (data){
const employeeContainer = renderToElement(employeeContainerTemplate)
const employees = data.filter(employee=>!employee.role)


   const onEdit = (e) =>{
   

    switch(e.target.id){
      case "delete": 
      eventManager.handle.dispatchEvent(new CustomEvent('deleteEmployee', {bubbles:true, detail:{id:e.currentTarget.dataset.id}} ));
      employeeContainer.removeChild(e.currentTarget.parentElement)
      break;
      case "edit": 
      // Snippet 1 Create Payload to send to the update endpoint.
      const payload = {
        id:e.currentTarget.dataset.id,
        firstname:e.currentTarget.parentElement.querySelector('#firstname').value.trim(),
        lastname:e.currentTarget.parentElement.querySelector('#lastname').value.trim(),
        salary:e.currentTarget.parentElement.querySelector('#salary').value.trim(),
        vacation:e.currentTarget.parentElement.querySelector('#vacation').value.trim(),
     }

      // Snippet 2. 
      eventManager.handle.dispatchEvent(new CustomEvent('editEmployee', 
      {bubbles:true, 
        detail:{  payload}
      } ));

      break;
    }

   }

   employees.forEach(employee=>{
      const template = renderTemplate(employeeTemplate, employee);
      const elem = renderToElement(template)
      elem.querySelector('.controls').addEventListener('click',  onEdit)
      employeeContainer.appendChild(elem)
   })

 

  return employeeContainer;

}


export default employee