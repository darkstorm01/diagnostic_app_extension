/*chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});*/
/*function getdetails() {
  chrome.system.memory.getInfo((a) => {
    console.log(a);
  });

  chrome.system.cpu.getInfo((a) => {
    console.log(a);
  });

  chrome.system.storage.getInfo((a) => {
    console.log(a);
  });

  chrome.system.display.getInfo((a) => {
    console.log(a);
  });
}

getdetails();

setInterval(getdetails, 30000);*/

async function getCPUinfo() {
  try {
    let cpuInfo = await chrome.system.cpu.getInfo();
    return cpuInfo;
  } catch (err) {
    return "Error";
  }
}
async function getStorageinfo() {
  try {
    let storageInfo = await chrome.system.storage.getInfo();
    return storageInfo;
  } catch (err) {
    return "Error";
  }
}
async function getMemoryinfo() {
  try {
    let memoryInfo = await chrome.system.memory.getInfo();
    return memoryInfo;
  } catch (err) {
    return "Error";
  }
}

getCPUinfo().then((data) => console.log(data));
getStorageinfo().then((data) => console.log(data));
getMemoryinfo().then((data) => console.log(data));

chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  switch (request) {
    case "CPU":
      console.log("CPU info requested");
      getCPUinfo().then((data) => sendResponse(data));
      break;
    case "storage":
      console.log("Storage info requested");
      getStorageinfo().then((data) => sendResponse(data));
      break;
    case "memory":
      console.log("Memory info requested");
      getMemoryinfo().then((data) => sendResponse(data));
      break;
  }
});
