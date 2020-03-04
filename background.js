browser.contextMenus.create({
    id: "tts",
    title: "Search on Twitter",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const url = "https://twitter.com/search?q="+ info.selectionText+ "&src=typed_query";

    browser.tabs.create({url:url});
}