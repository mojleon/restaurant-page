export default class footer {
  constructor() {
    this.body = document.querySelector("body");
  }

  createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerContent = document.createElement("div");
    footerContent.classList.add("footer-content");

    const footerText = document.createElement("div");
    footerText.classList.add("footer-text");
    footerText.innerHTML = "Copyright © 2022";
    footerContent.appendChild(footerText);

    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links");
    footerLinks.innerHTML = `by <a href="https://github.com/mojleon" target="_blank">Damir Kalbic</a>`;
    footerContent.appendChild(footerLinks);

    footer.appendChild(footerContent);
    return footer;
  }
}
