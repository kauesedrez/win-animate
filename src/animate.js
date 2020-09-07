/**
 * Create css animations
 * Credits to Copyright (c) 2020 Daniel Eden from https://animate.style
 * @param  {string} element tag("#myDiv"), class(".selectors") or tag("p")
 * @param  {string} animation animation name
 * @param  {string=} speed default **fast**
 */
export function anim(element, animation, speed = "fast") {
  return new Promise((resolve, reject) => {
    const prefix = "animate__";
    const animationName = `${prefix}${animation}`;
    var node = document.querySelector(element);

    if (!node) {
      node = document.getElementById(element);
    }

    node.classList.add(
      `${prefix}animated`,
      `${prefix}${speed}`,
      animationName
    );

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd);
  });
}
