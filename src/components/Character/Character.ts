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

    
    // image?: string;
    // name?: string;
    // status?: string;
    // species?: string;
    // type?: string;
    // origin?: string;
    // firstepisode?: string;

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `

            <div id="card">
            <div>
               <img src="${this.image || 'No image'}" alt="imagen de: ${this.name}">
            </div>

            <div id="txt">
            <h1>${this.name || 'No name'}</h1>
            <p>ID: ${this.uid || 'No ID'}</p>
            <p>Age: ${this.age || 'No age'}</p>
            <p>Gender: ${this.gender || 'No gender'}</p>
            <p>Area: ${this.area || 'No area'}</p>
            <p>Position: ${this.position || 'No position'}</p>
            <p>Time In Company: ${this.timeincompany || 'No time'}</p>
            <p>Experience Years: ${this.xp || 'No experience'}</p>
            </div>

            </div>

            `
        }
    }
}

customElements.define("character-component", Character);
export default Character;