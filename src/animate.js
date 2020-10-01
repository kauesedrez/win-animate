import { Winnetou } from "../../winnetoujs/src/winnetou.js";

/**
 * Create css animations
 * Credits to Copyright (c) 2020 Daniel Eden from https://animate.style
 * @param  {string} element tag("#myDiv"), class(".selectors") or tag("p")
 * @param  {string} animation animation name
 * @param  {"fast"|"faster"|"slower"|"slow"=} speed default **fast**
 *
 * Todo:
 * --> jsdoc speed params
 * --> query selector all
 */
export function anim(element, animation, speed = "fast") {
  return new Promise((resolve, reject) => {
    const prefix = "animate__";
    const animationName = `${prefix}${animation}`;
    const node = Winnetou.select(element).getEl(element);

    Winnetou.select(element)
      .addClass(`${prefix}animated`)
      .addClass(`${prefix}${speed}`)
      .addClass(animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node[0].classList.remove(`${prefix}animated`, animationName);
      node[0].removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }

    node[0].addEventListener("animationend", handleAnimationEnd);
  });
}
