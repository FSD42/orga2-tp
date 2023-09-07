import createElement from "../functions/createElement";
import navigate from "../functions/navigate";
import discordNavbar from "./../assets/images/discordNavbar.png"
import Button from "./navlink"

/**
 * Return Navbar component
 * @return { HTMLElement }
 */
export default () => {

    const navbarContainer = createElement('nav', { class: 'navbar-container' });
    const navbarContent = createElement('div', { class: 'navbar-content' });
    const navbarLogo = createElement('div', { class: 'navbar-logo' });
    const logo = createElement('img', { src: discordNavbar, alt:'Logo de Discord' }, () => { navigate('/') });
    const navbarLinks = createElement('div', { class: 'navbar-links' });
    
    navbarLinks.appendChild(Button({label: "Jobs" , path: "/jobs", className: ["nav-btn"]}));
    navbarLinks.appendChild(Button({label: "Profile" , path: "/profile", className: ["nav-btn"]}));
    navbarLogo.appendChild(logo);
    navbarContent.appendChild(navbarLogo);
    navbarContent.appendChild(navbarLinks);
    navbarContainer.appendChild(navbarContent);

    return navbarContainer;
}