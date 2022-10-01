/**
 *
 * @param {HTMLElement} domElelemtRef
 * @returns
 */
export default function useOverflow(domElelemtRef) {
  // client usage only
  if (typeof document == "undefined") {
    return {
      // keep same signature to avoid server side 
      // compilation errors
      // but dont do nothing really
      hideOverflow() {},
      showOverflow() {},
    };
  }
  // falback to body element
  if (!domElelemtRef || !(domElelemtRef instanceof HTMLElement)) {
    domElelemtRef = document.querySelector("body");
  }

  return {
    /**
     * Applies `overflow: hidden` to the element style
     */
    hideOverflow() {
      domElelemtRef.style.overflow = "hidden";
    },
    /**
     * Resets the overflow prop of element style
     */
    showOverflow() {
      domElelemtRef.style.overflow = "";
    },
  };
}
