/**
 * Redirect user to a another page
 * @param { String } url
 * @param { Object } method
 * @return { void }
 */
export default (path, params) => {
    window.history.pushState({}, null, path);
    window.dispatchEvent(new CustomEvent('router-event', { detail: { path, params } }));
}