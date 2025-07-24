chrome.contextMenus.create({
    id: "searchOnTwitter",
    title: "Search on x(Twitter)",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    if (info.menuItemId !== "searchOnTwitter") {
        return;
    }
    const url = "https://twitter.com/search?q="+ info.selectionText+ "&src=typed_query";

    chrome.tabs.create({url:url});
}