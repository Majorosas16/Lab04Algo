// export enum Attribute {
//     "image" = "image",
//     "name" = "name",
//     "status" = "status",
//     "species" = "species",
//     "type" = "type",
//     "origin" = "origin",
//     "firstepisode" = "firstepisode",
// }

// class Employee extends HTMLElement {

//     image?: string;
//     name?: string;
//     status?: number;
//     age?: number;
//     gender?: string;
//     area?: string;
//     position?: string;

//     static get observedAttributes(){
//         return Object.keys(Attribute); //  return ["image","uid","age".....]
//     }

//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//     }

//     attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
//         switch(propName){
//             case Attribute.uid: //id transform to number to string. All the same in those propieties with number
//                 this.uid = newValue ? Number(newValue) : undefined;
//                 break;
            
//             case Attribute.age: //age
//                 this.age = newValue ? Number(newValue) : undefined;
//                 break;
            
//             case Attribute.timeincompany: //time in company
//                 this.timeincompany = newValue ? Number(newValue) : undefined;
//                 break;
            
//             case Attribute.xp: //xp
//                 this.xp = newValue ? Number(newValue) : undefined;
//                 break;

//             default: 
//             this[propName] = newValue;
//             break;
//         }
        
//         this.render();
//     }

//     connectedCallback(){
//         this.render();
//     }

//     render() {
//         if(this.shadowRoot){
//             this.shadowRoot.innerHTML = `
//             <link rel="stylesheet" href="../src/components/myComponent/myComponent.css">
//             <section>

//             <div id="card">
//             <img src="${this.image || 'No image'}" alt="imagen de: ${this.name}">

//             <div id="txt">
//             <h1>${this.name || 'No name'}</h1>
//             <p>ID: ${this.uid || 'No ID'}</p>
//             <p>Age: ${this.age || 'No age'}</p>
//             <p>Gender: ${this.gender || 'No gender'}</p>
//             <p>Area: ${this.area || 'No area'}</p>
//             <p>Position: ${this.position || 'No position'}</p>
//             <p>Time In Company: ${this.timeincompany || 'No time'}</p>
//             <p>Experience Years: ${this.xp || 'No experience'}</p>
//             </div>

//             </div>

//             </section>
//             `
//         }
//     }
// }

// customElements.define("worker-component", Employee);
// export default Employee;