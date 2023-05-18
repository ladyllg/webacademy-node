/* Módulo str_helper.js */
export function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}
export function lower(str) {
    return str.toLowerCase();
}