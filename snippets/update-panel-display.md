#### Snippet #1  
Call the update display method of the display panel  
__file:__<sub><sup> dashboard/index.js</sup></sub>    
```javascript
eventManager.handle.addEventListener('updateDisplay', (e)=>{
   displayPanel.updateDisplay(e.detail); 
}) 
```

#### Snippet #2  
Create reference to the panel heading and create to container variables.  
__file:__<sub><sup> dashboard/display-panel/index.js</sup></sub>     
    

```javascript
  const viewHeading = document.querySelector('#widget-heading')
  let managers = null;
  let employees = null;
```  

#### Snippet #3  
Remove the manager and employee view from the panel. Call the init function with the new data.   
__file:__<sub><sup> dashboard/display-panel/index.js  </sup></sub>  


```javascript
  view.removeChild(managers)
  view.removeChild(employees)
  init(data)
``` 



 