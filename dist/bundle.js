(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <h1>aaaa</h1>")}}customElements.define("app-container",e)})();