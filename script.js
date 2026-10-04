window.onload = (event) => {
      //in case I want to make something run at launch
}

function openInfo(div) {
      let grid = document.getElementById(`appHolder`);
      // if(!grid.style.width) {
      //       grid.style.width = grid.clientWidth + 10 + "px";
      // }
      let appInfo = document.getElementById(`${div.id}Info`);
      let allTabs = document.querySelectorAll(".appInfo");
      let openTab = false;
      Array.from(allTabs).filter((tab) => { return tab.id != appInfo.id }).forEach((tab) => {
            if (tab.style.display.length > 0 && tab.style.display != `none`) {
                  openTab = true;
                  appInfo.style.maxHeight = tab.clientHeight + "px";
                  appInfo.style.minHeight = tab.clientHeight + "px";
            } else if (openTab == false) {
                  appInfo.style.minHeight = ``;
            }
            tab.style.display = `none`;
            tab.style.maxHeight = ``;
      });
      if (appInfo.style.display != `block`) {
            let newWidth = grid.clientWidth;
            let maxHeight = window.innerHeight;
            appInfo.style.display = `block`;
            appInfo.style.width = newWidth + "px";
            appInfo.style.maxHeight = maxHeight + "px";
            triggerAnimations(appInfo);
      } else {
            resetAnimations(appInfo);
      }
}

function triggerAnimations(appInfo) {
      let divText = appInfo.querySelectorAll(`.infoText`);
      let divArray = Array.from(divText);
      divArray.forEach((text) => {
            text.style.opacity = `0%`;
      });
      appInfo.style.opacity = `0%`;
      setTimeout(() => {
            appInfo.style.opacity = `100%`;
      }, 1);
      appInfo.ontransitionend = () => {
            setTimeout(() => {
                  appInfo.style.clipPath = `rect(0% 100% 100% 0%)`;
                  appInfo.style.minHeight = 0;
            }, 1);
            appInfo.ontransitionend = () => {
                  appInfo.style.clipPath = `none`;
                  appInfo.ontransitionend = null;
                  divArray.forEach((text) => {
                        setTimeout(() => {
                              text.style.opacity = `100%`;
                        }, 1);
                  });
            };
      };
}

function resetAnimations(appInfo) {
      let divText = appInfo.querySelectorAll(`.infoText`);
      let divArray = Array.from(divText);
      divArray.forEach((text) => {
            setTimeout(() => {
                  text.style.opacity = `0%`;
            }, 1);
            text.ontransitionend = () => {
                  text.ontransitionend = null;
                  appInfo.style.clipPath = `rect(0% 100% 100% 0%)`;
                  setTimeout(() => {
                        appInfo.style.clipPath = ``;
                  }, 1);
                  appInfo.ontransitionend = () => {
                        appInfo.style.opacity = `100%`;
                        setTimeout(() => {
                              appInfo.style.opacity = `0%`;
                        }, 1);
                        appInfo.ontransitionend = () => {
                              appInfo.style.display = `none`;
                              appInfo.ontransitionend = null;
                        };
                  };
            }
      });
}

function spreadIcon(div) {
      let grid = document.getElementById(`appHolder`);
      if (!grid.style.width) {
            grid.style.width = grid.clientWidth + 10 + "px";
      }
      let newWidth = grid.clientWidth;
      let maxHeight = window.innerHeight;
      div.style.width = newWidth + "px";
      setTimeout(() => {
            div.style.minHeight = ``;
            div.style.maxHeight = maxHeight + "px";
      }, 1);
}