import { useState, useEffect } from "react"

// Import array of movies
import movies from "../assets/movies"

export default function Main() {

    {/* Array of movies */}
    <movies />

    {/* State of filtred movies */}
    const [filtredMovie, setFiltredMovie] = useState(movies)

    {/* State of genres */}
    const [genre, setGenre] = useState('0')

    {/* State of newMovie */}
    const [newMovie, setNewMovie] = useState('')

    {/* State of Search of title */}
    const [titleMovie, setTitleMovie] = useState('')

    {/* useEffect for Search */}
    useEffect( () => {
        


    })

    {/* Function onSubmit */}
    const handleClick = (e) => {
        e.preventDefault()

        const addMovie = {
            title: newMovie,
            genre: 'New movie'
        }

        if (newMovie.length !== 0) {
            setFiltredMovie([...filtredMovie, addMovie])
        } 
        
    }
    


    {/* useEffect for genre */}
    useEffect( () => {

        if (genre === '0') {
            setFiltredMovie(movies)

        } else {
            const updateList = movies.filter((thisMovie) => genre === thisMovie.genre)
            setFiltredMovie(updateList)
        }

    }, [genre] )
    

    return (
        <>
        <main className="py-3">
            <div className="container">

                {/* Card */}
                <div className="card">

                    {/* Card Top */}
                    <div className="card-top">
                        {/* Form */}
                        <form onSubmit={handleClick}>

                            {/* Select of genres */}
                            <select 
                                className="form-select"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option value='0'>Select the genre of movie</option>
                                <option value="Fantascienza">Fantascienza</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Romantico">Romantico</option>
                                <option value="Azione">Azione</option>
                                <option value="New movie">New movie</option>
                            </select>

                            {/* Search of title */}
                            <input 
                                type="search"
                                placeholder="Search a movie" 
                            />

                            {/* Adding movie */}
                            <input
                                className="my-2" 
                                placeholder="Add a movie"
                                type="text"
                                value={newMovie}
                                onChange={(e) => setNewMovie(e.target.value)} 
                            />

                            {/* Button submit */}
                            <button type="submit">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Card Bottom */}
                    <div className="card-body">
                        <ul>
                            {
                                filtredMovie.map((thisMovie, i) => (
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