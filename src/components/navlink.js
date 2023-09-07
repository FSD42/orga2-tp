import navigate from "../functions/navigate";

/**
 * Return Navlink component
 * @return { HTMLElement }
 */
export default ({ label = "", path, className, datas }) => {
    const button = document.createElement('button');
    button.textContent = label;
    className?.forEach(c => button.classList.add(c));
    button.addEventListener('click', e => navigate(path, datas));
    return button;
}