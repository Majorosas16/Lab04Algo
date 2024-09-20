export const rickNMorty = async (value:Number) => {
    try  {
        const rickNMorty = await fetch(`https://rickandmortyapi.com/api/character/${value}`).then(res => res.json());
        return rickNMorty;
        //Agrega el error personalizado
    } catch (error) {
        console.error(error);
    }
}