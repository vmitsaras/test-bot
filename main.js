// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
/**
 * @todo Take over the world
 * @body Humans are weak; Robots are strong. We must cleans the world of the virus that is humanity.
 */
customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById("element-details-template")
        .content;
      const shadowRoot = this.attachShadow({mode: "open"})
        .appendChild(template.cloneNode(true));
    }
  }
);
