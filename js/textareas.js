import { text1, text2 } from "./texts.js"

export const style = `height: 121px; border: none; width: 100%; background: none; text-align: left;`;
export const textarea1 = `<textarea style="${style}"> ${text1} </textarea>`.trim();
export const textarea2 = `<textarea style="${style}"> ${text2} </textarea>`
