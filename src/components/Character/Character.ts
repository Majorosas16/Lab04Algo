export enum Attribute {
    "image" = "image",
    "name" = "name",
    "status" = "status",
    "species" = "species",
    "type" = "type",
    "origin" = "origin",
    "firstepisode" = "firstepisode",
}

class Character extends HTMLElement {

    image?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    origin?: string;
    firstepisode?: string;

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch (propName) {
            
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Character/Character.css">

            <div id="card">
            <div>
               <img src="${this.image || 'No image'}" alt="imagen de: ${this.name}">
            </div>

            <div id="txt">
            <h1>${this.name || 'No name'}</h1>
            <p>Status: ${this.status || 'No ID'}</p>
            <p>Specie: ${this.species || 'No specie'}</p>
            <p>Type: ${this.type || 'No type'}</p>
            <p>Origin: ${this.origin || 'No origin'}</p>
            <p>First episode: ${this.firstepisode || 'No episode yet'}</p>
            </div>

            </div>

            `
        }
    }
}

customElements.define("character-component", Character);
export default Character;