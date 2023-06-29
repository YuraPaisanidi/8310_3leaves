require("./../../global/js/global-entry")

import "./index.scss"
import gsap from "gsap"

/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/8310_1.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/8310_2.svg")
require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par=''&class=''!./img/8310_3.svg")
// console.log(svgContent);

require('./app')