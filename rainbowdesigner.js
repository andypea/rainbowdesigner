const mainText = document.getElementById("main-text");
const fontSelect = document.getElementById("font-select");
const widthRange = document.getElementById("width-range");
const heightRange = document.getElementById("height-range");
const fontSizeRange = document.getElementById("font-size-range");
const lineHeightRange = document.getElementById("line-height-range");

const updateMainText = () => {
  mainText.style.fontFamily = fontSelect.value;
  mainText.style.width = "".concat(widthRange.value, "vw");
  mainText.style.height = "".concat(heightRange.value, "vh");
  mainText.style.fontSize = "".concat(fontSizeRange.value, "vw");
  mainText.style.lineHeight = lineHeightRange.value;
};

fontSelect.addEventListener("change", () => {
  updateMainText();
});

widthRange.addEventListener("change", () => {
  updateMainText();
});

heightRange.addEventListener("change", () => {
  updateMainText();
});

fontSizeRange.addEventListener("change", () => {
  updateMainText();
});

lineHeightRange.addEventListener("change", () => {
  updateMainText();
});

updateMainText();
