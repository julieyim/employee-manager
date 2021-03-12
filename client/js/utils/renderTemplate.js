import ejs from 'ejs'



function renderTemplate(template, data){ 
    return ejs.render(template, {data})
}


export default renderTemplate