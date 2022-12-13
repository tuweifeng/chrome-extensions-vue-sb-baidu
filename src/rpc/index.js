import jquery from "jquery"
import RPCBase from "./base"

const $ = jquery

export const ACTIONS = ["hide"]

class RPC{
    actions = ACTIONS
    hide = (cssSelector)=>{
        $(cssSelector).hide()
    }
}

const rpc = new RPC()

export default rpc