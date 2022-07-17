export type CSSINput = {
  padding: string;
  width: string;
  height: string;
  bgColor: string;
};

export const makeDiv = (input: CSSINput) => {
  const div = document.createElement("div");
  div.textContent = "hi";
  div.style.setProperty("padding", input.padding);
  div.style.setProperty("width", input.width);
  div.style.setProperty("height", input.height);
  div.style.setProperty("background-color", input.bgColor);
  document.getElementById("app")?.appendChild(div);
};
