import Character, {Attribute} from "./components/Character/Character";
import {rickNMorty } from "./services/dataFetch"
import {getFirstEpisode} from "./services/dataFetch"

class AppContainer extends HTMLElement{

    arrayCharacter: Character[] = [];
    dataRickNMorty: any[] = [];
    dataNameFistEpisode: any[] = [];
        
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        this.render();
        this.inputValue();
    }

    inputValue() {

        //Code for get input value and others
        const form = this.shadowRoot?.querySelector(".form") as HTMLFormElement;
        const input = this.shadowRoot?.querySelector(".input") as HTMLInputElement;

        form?.addEventListener("submit", async (event) => {
            event.preventDefault();

            const valueInput = Number(input.value);
            console.log(valueInput);

            if (valueInput > 0) {

                // Limpiar personajes de arreglos anteriores
                this.arrayCharacter = [];
                this.dataRickNMorty = [];
                this.dataNameFistEpisode = [];

                // Obtener nuevos personajes
                for (let i = 1; i <= valueInput; i++) {

                    const characterData = await rickNMorty(i);
                    const characterNameFirstEpisode = await getFirstEpisode(characterData.episode[0]);
                    this.dataRickNMorty.push(characterData);
                    this.dataNameFistEpisode.push(characterNameFirstEpisode.name) //duda

                }
                this.createCardsRickAndMorty();
                
                this.renderCharacters();
            }
        });
    }

    createCardsRickAndMorty() {
            let count = 0;
            this.dataRickNMorty.forEach((element) => {
            const card = this.ownerDocument.createElement('character-component') as Character;
            card.setAttribute(Attribute.image, element.image)
            card.setAttribute(Attribute.name, element.name)
            card.setAttribute(Attribute.status, element.status)
            card.setAttribute(Attribute.species, element.species)
            card.setAttribute(Attribute.type, element.type)
            card.setAttribute(Attribute.origin, element.origin.name)
            card.setAttribute(Attribute.firstepisode, this.dataNameFistEpisode[count]);
            this.arrayCharacter.push(card);
            
            count ++;
        })
    
        
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="../src/styles.css">
            <div class="txt">
            <h1>Rick and Morty Cards</h1>
            <p>Give me a number (1-20) to show your favorite character</p>

                <form class="form">
                <input class="input" type="number" placeholder="Here" min="1" max="20" step="1">
                </form>
            </div>
            <div class="cardsDiv"></div>` 

        }
    }

    renderCharacters() {

        const container = this.shadowRoot?.querySelector('.cardsDiv');
        if (container) {
            
            // Limpiar el contenido antes de renderizar
            container.innerHTML = '';

            this.arrayCharacter.forEach((element) => {
                container?.appendChild(element);
            });
        }
    }
}

customElements.define('app-container', AppContainer);
