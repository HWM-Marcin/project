type Status = "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled"

export default interface Movie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null | {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string
    },
    budget: number,
    genres: [
        {
            id: number,
            name: string
        }
    ],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [
        {
            id: number,
            logo_path: string,
            name: string,
            origin_country: string
        }
    ],
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [
        {
            iso_639_1: string,
            name: string
        }
    ],
    status: Status,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}