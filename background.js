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
chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  console.log(request);
  sendResponse("Hi");
});
