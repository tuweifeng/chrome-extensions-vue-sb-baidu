import jquery from 'jquery'
import Dispatcher from '@/base/Dispatcher'
const $ = jquery

class BaiduSearch extends Dispatcher{

  constructor() {
    super("BaiduSearch")
  }

  removeAds = () => {
    $(".EC_result").hide()
    console.log("hide EC_result")
  }

}


export default BaiduSearch