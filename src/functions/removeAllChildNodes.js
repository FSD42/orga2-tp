/**
 * Delete all child nodes of a parent node
 * @param { HTMLElement } parent
 * @return { void }
 */
export default (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}