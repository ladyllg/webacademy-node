/* Módulo str_helper.js */
function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}
function lower(str) {
    return str.toLowerCase();
}
module.exports = {
    createLink: createLink,
    lower: lower
};