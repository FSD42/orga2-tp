import createElement from "../functions/createElement";

/**
 * Return Footer component
 * @return { HTMLElement }
 */
export default () => {

    const footer = createElement('footer', { class: 'footer' });
    const footerContainer = createElement('div', { class: 'footer-container' });
    const footerContent = createElement('div', { class: 'footer-content' });
    const footerLogo = createElement('div', { class: 'footer-logo' });
    const h2 = createElement('h2', { class: 'footer-title' });
    h2.textContent = "© 2023 - All rights reserved";
    
    footerContent.appendChild(footerLogo);
    footerContent.appendChild(footerLogo);
    footerContent.appendChild(h2);
    footerContainer.appendChild(footerContent);
    footer.appendChild(footerContainer);

    return footer;
}