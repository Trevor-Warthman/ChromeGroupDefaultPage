import { getCurrentTab, openNewOptionsTab } from './utilities.js'

document.querySelector('#setAsDefault').addEventListener('click', setCurrentPageToDefaultForGroup);
document.querySelector('#goToOptions').addEventListener('click', openNewOptionsTab);

async function setCurrentPageToDefaultForGroup() {
  const tab = await getCurrentTab();
  if (tab.groupId === -1) {
    alert('This tab is not in a group!');
  } else {
    await chrome.storage.sync.set({ [tab.groupId]: tab.url });
  }
}