import Character, {Attribute} from "./components/Character/Character";
import {rickNMorty} from "./services/dataFetch"

class AppContainer extends HTMLElement{

    arrayCharacter: Character[] = [];
    dataRickNMorty: any[] = [];
        
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback(value: Number) {

        this.inputValue();
        
        //Aquí se resuelve la promesa o digamos que se carga lo que haya en ese API
        this.dataRickNMorty = await rickNMorty(value);

        this.createCardsRickAndMorty();
        this.render();
    }

     createCardsRickAndMorty() {
            this.dataRickNMorty.forEach((element) => {
            const card = this.ownerDocument.createElement('character-component') as Character;
            card.setAttribute(Attribute.image, element.image)
            card.setAttribute(Attribute.name, element.name)
            card.setAttribute(Attribute.status, element.status)
            card.setAttribute(Attribute.species, element.species)
            card.setAttribute(Attribute.type, element.type)
            card.setAttribute(Attribute.origin, element.origin.name)
            card.setAttribute(Attribute.firstepisode, element.episode)
            this.arrayCharacter.push(card)
        })
        
        
    }

    inputValue() {
        const form = this.shadowRoot?.querySelector('.form');
        const input = this.shadowRoot?.querySelector('.input') as HTMLInputElement; // Conversión de tipo a HTMLInputElement HTMLInputElement: Se asegura que input sea tratado como un campo de entrada de número que sí tiene la propiedad value.
        
        if (form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            if (input) {
              const value = Number(input.value);
              this.connectedCallback(value)
              console.log(value);
            }
        
            (form as HTMLFormElement).reset(); // Conversión de tipo a HTMLFormElement para usar reset()
          });
        }
    }


    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <h1>Rick and Morty Cards</h1>
            <form class="form">
            <input type = "number" placeholder="Pick a number" class= "input" required>
            <button>Send</button>
            <div class="cardsDiv"></div>
            </form>` 

            this.arrayCharacter.forEach((card) => {
                this.shadowRoot?.appendChild(card)
                const divider = this.ownerDocument.createElement('hr');
                this.shadowRoot?.appendChild(divider)
            })
        }
    }
}

customElements.define('app-container', AppContainer);
