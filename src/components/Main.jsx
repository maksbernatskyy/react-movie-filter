import { useState, useEffect } from "react"

// Import array of movies
import movies from "../assets/movies"

export default function Main() {

    {/* Array of movies */}
    <movies />

    {/* State of filtred movies */}
    const [filtredMovie, setFiltredMovie] = useState(movies)

    {/* State of genres */}
    const [genre, setGenre] = useState(0)
    
    return (
        <>
        <main className="py-3">
            <div className="container">

                {/* Card */}
                <div className="card">

                    {/* Card Top */}
                    <div className="card-top">
                        {/* Form */}
                        <form>
                            {/* Select of genres */}
                            <select 
                                className="form-select"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option defaultValue={0}>Select the genre of movie</option>
                                <option value="1">Fantascienza</option>
                                <option value="2">Thriller</option>
                                <option value="3">Romantico</option>
                                <option value="4">Azione</option>
                            </select>
                        </form>
                    </div>

                    {/* Card Bottom */}
                    <div className="card-body">
                        <ul>
                            {
                                movies.map((thisMovie, i) => (
                                    <li key={i} className="my-2"> 
                                        Title: "{thisMovie.title}"; Genre: "{thisMovie.genre}" 
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}