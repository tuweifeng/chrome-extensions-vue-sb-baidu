
const HostMap = {
    BaiduSearch: {
        name: "百度搜索",
        urlPattern: "*://*.baidu.com/s?*",
        actions: ["removeAds"]
    },
    BaiduWenku: {
        name: "百度文库",
        urlPattern: "*://wenku.baidu.com/search?*",
        actions: ["removeAds"]
    },

}



export {
    HostMap
}