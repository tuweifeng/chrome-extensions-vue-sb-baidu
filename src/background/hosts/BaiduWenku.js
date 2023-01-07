import jquery from 'jquery'
import Dispatcher from '@/base/Dispatcher'
const $ = jquery

class BaiduWenku extends Dispatcher{

  constructor() {
    super("BaiduWenku")
  }

  removeAds = () => {
    $(".fc-result-container").hide()
    console.log("hide fc-result-container")
    $(".rights-card-new").hide()
    console.log("hide rights-card-new")
  }

}


export default BaiduWenku