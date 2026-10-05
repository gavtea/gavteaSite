window.onload = (event) => {
//in case I want to make something run at launch

}

function openInfo(div) {
      let grid = document.getElementById(`appHolder`);
      if(!grid.style.width) {
            grid.style.width = grid.clientWidth + 10 + "px";
      }
      let appInfo = document.getElementById(`${div.id}Info`);
      let allTabs = document.querySelectorAll(".appInfo");
      let openTab = false;
      Array.from(allTabs).filter((tab) => { return tab.id != appInfo.id }).forEach((tab) => {
            if(tab.style.display.length > 0 && tab.style.display != `none`) {
                  openTab = true;
                  appInfo.style.maxHeight = tab.clientHeight + "px";
                  appInfo.style.minHeight = tab.clientHeight + "px";
            } else if (openTab == false) {
                  appInfo.style.minHeight = ``;
            }
            tab.style.display = `none`;
            tab.style.maxHeight = ``;
      });
      if(appInfo.style.display != `block`) {
            let newWidth = grid.clientWidth;
            let maxHeight = window.innerHeight;
            appInfo.style.display = `block`;
            appInfo.style.width = newWidth + "px";
            setTimeout(() => {
                  appInfo.style.minHeight = ``;
                  appInfo.style.maxHeight = maxHeight + "px";
            }, 1);
      } else {
            appInfo.style.maxHeight = ``;
            appInfo.ontransitionend = () => {
                  appInfo.style.display = `none`;
                  appInfo.ontransitionend = null;
            };
            
      }
}