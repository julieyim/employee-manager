import api from '../api'
import dataFetcher from '../../utils/dataFetcher'
const EventManager = (function () {
    let instance = null;
  
    function createInstance() {
      const handle = document.createElement("img");
      document.body.appendChild(handle);
    
  
      const onDeleteEmployee = async (e) => {
        const result = await dataFetcher.deleteRequest(api.deleteEmployee(e.detail.id));
        console.log(result)
        handle.dispatchEvent(new CustomEvent('removeItem',{bubbles:true, detail:result}))
      };
  
      const onEditEmployee = async(e) => {
        // Snippet #4 create the url using the api module and call the dataFetcher edit employee funciton
        const result = await dataFetcher.putRequest(api.updateEmployee, e.detail.payload);
      };
  
      const onFetchRequest = async (e) => {
        const result = await dataFetcher.getRequest(api.getDepartment(e.detail.name));
        handle.dispatchEvent(new CustomEvent('updateDisplay',{bubbles:true, detail:result}))
      };
  
      handle.addEventListener("deleteEmployee", onDeleteEmployee);
      // Snippet #3
      handle.addEventListener("editEmployee",  onEditEmployee);
      handle.addEventListener("sideBarSelect",  onFetchRequest);
  
      return {
        handle,
      };
    }
   
     

    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();

  export default EventManager