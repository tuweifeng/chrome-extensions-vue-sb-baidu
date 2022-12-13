
class RPCBase {

    dispatch =  (url, actionName, args)=>{
        console.log(`dispatch action: ${actionName}`)
        chrome.tabs.query({ url: url }, (tabs) => {
            tabs.forEach(tab => {
              chrome.tabs.sendMessage(tab.id, { actionName: actionName, args: args }, {}, (res) => { console.log(res) })
            })
          })
    }


    startServer = () => {
        console.log("startServer...")
        const self = this
        chrome.runtime.onMessage.addListener(({ actionName, args }, sender, sendResponse) => {
            const target = Reflect.get(self, actionName)
            target(...args)
            sendResponse({ url: document.URL, title: `${document.title}`, ok: 1 })
        })
    }

}


export default RPCBase