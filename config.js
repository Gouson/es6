const apiKey = 'abc123';

//默认导出
/* export default apiKey; */

//命名导出
export const apiKey1 = 'abc123';
export const apiKey2 = 'edf';

export function greet(name) {
    console.log(`hello ${name}`)
}