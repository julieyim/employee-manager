import sideBarOptions from "./sideBarOptions";
import sideBarOpiton from "./sideBarOption";
import sideBarOption from "./sideBarOption";

const container = document.querySelector("#sidebar");


const SideBar = function(){

const init = function (data) {
  const parentElement = sideBarOptions();
  data.forEach((item) => {
    const childElement = sideBarOption(item);
    parentElement.append(childElement);
  });

  container.append(parentElement);
};

    return {init}
}

 

export default SideBar;
