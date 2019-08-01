chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        //id: key,
        title: "test1",
        type: 'normal',
        contexts: ['page'],
        onclick:function(){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                  console.log(response);
                });
              });
              
            
        }
      });

    chrome.contextMenus.create({
        //id: key,
        title: "test2",
        type: 'normal',
        contexts: ['selection'],
      });
  });