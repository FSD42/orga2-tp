import createElement from "../functions/createElement"
import headerImg from "./../assets/images/headerImg.webp"

/**
 * Return Header component
 * @return { HTMLElement }
 */
export default () => {
 const header = createElement('header', { class: 'header-container' })
 const textContainer = createElement('div', { class: 'header-text-container' })
    const headerTitle = createElement('h1', { class: 'header-title' })
    headerTitle.textContent = 'WORKING AT DISCORD'

    const headerSubtitle = createElement('h2', { class: 'header-subtitle' })
    headerSubtitle.textContent = "Discord welcomes individuals brimming with (com)passion, who believe in our mission: to create a space where everyone can develop a sense of belonging."
    
  const headerImage = createElement('img', { class: 'header-image', src: headerImg, alt: "Travail d'équipe" })
  
    textContainer.appendChild(headerTitle)
    textContainer.appendChild(headerSubtitle)
    textContainer.appendChild(headerImage)
    header.appendChild(textContainer)
    return header
}