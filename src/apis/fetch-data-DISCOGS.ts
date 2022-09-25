import axios from "axios";

export const getSearchDetails = async (artist: string, genre: string, style: string, page: string) => {
    const URL = `https://api.discogs.com/database/search?q=${artist}&genre=${genre}&style=${style}&per_page=20&page=${page}&key=VqZUFKLkvLwyMDTEGzsX&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY&secret=hHOemXQZWexijknYxiBSWrUpWVzzujfY`;

    interface ArtistDetails {
        title: string;
        id: number;
        description: string;
        pagination: any;
        results: any;
    }

    try {
        const { data } = await axios.get(URL);
        const artistDetails = data as ArtistDetails;
        return artistDetails;
    } catch (error) {
        console.log(error);
    }
};
