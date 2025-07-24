browser.contextMenus.create({
    id: "searchOnTwitter",
    title: "Search on x(Twitter)",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    if (info.menuItemId !== "searchOnTwitter") {
        return;
    }
    const url = "https://twitter.com/search?q="+ info.selectionText+ "&src=typed_query";

    browser.tabs.create({url:url});
}