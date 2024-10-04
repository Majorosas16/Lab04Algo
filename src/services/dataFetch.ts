export const rickNMorty = async (value:Number) => {
    try  {
        const dataRickNMorty = await fetch(`https://rickandmortyapi.com/api/character/${value}`).then(res => res.json());
        return dataRickNMorty;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getFirstEpisode = async (nameOfFirstEpisode:String) => {
    try {
        const firstEpisode = await fetch(`${nameOfFirstEpisode}`).then(res => res.json());
        return firstEpisode;
    } catch (error) {
        console.error(error);
    }
}