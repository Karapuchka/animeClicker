let MobileDetect = require('mobile-detect');

let detect = new MobileDetect(window.navigator.userAgent)

export default detect;