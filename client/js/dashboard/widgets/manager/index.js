import managerTemplates from "./managerTemplates";
import renderTemplate from "../../../utils/renderTemplate";
import renderToElement from "../../../utils/renderToElement";

const managerView = (data) => {
  const view = document.querySelector("#managers");
  const managers = data.filter((manager) => manager.role);
  const parentElement = renderToElement(managerTemplates.parentTemplate);

  managers.forEach((manager) => {
    const template = renderTemplate(managerTemplates.childTemplate, manager);
    const elem = renderToElement(template);
    parentElement.appendChild(elem);
  });

  return parentElement;
};

export default managerView;
