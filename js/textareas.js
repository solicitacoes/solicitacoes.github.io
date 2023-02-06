import { text1, text2 } from "./texts.js"

export const styleTextArea = `height: 121px; border: none; width: 100%; background: none; text-align: left;`;
export const textarea1 = `<textarea style="${styleTextArea}"> ${text1} </textarea>`.trim();
export const textarea2 = `<textarea style="${styleTextArea}"> ${text2} </textarea>`
