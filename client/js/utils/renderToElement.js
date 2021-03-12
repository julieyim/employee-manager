function renderToElement(template){
    return document.createRange().createContextualFragment(template).firstElementChild
}


export default renderToElement