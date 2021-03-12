const childTemplate = `
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`

const parentTemplate = `
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`

const managerTemplates = {parentTemplate, childTemplate}

export default managerTemplates