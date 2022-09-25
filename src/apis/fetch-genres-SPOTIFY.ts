import client from "../shared/spotify-client";

export const getGenres = async () => {
    const genres = await client.getAvailableGenreSeeds();
    console.log(genres);
    
    return genres;
}