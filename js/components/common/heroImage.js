import { baseUrl } from "../../tools/data/api.js";

export default function heroImage() {
  const heroUrl = baseUrl + "home";

  async function getHeroImage() {
    const response = await fetch(heroUrl);
    const hero = await response.json();

    const heroContainer = document.querySelector(".hero-container");

    heroContainer.innerHTML = `<div><img src="${hero.hero_banner.url}" alt= ${hero.hero_banner_alt_text} /> </div>`;
  }

  getHeroImage();
}
