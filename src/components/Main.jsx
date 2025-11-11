import { useState, useEffect } from "react"

// Import array of movies
import movies from "../assets/movies"

export default function Main() {
    
    {/* Array of movies */}
    <movies />

    return (
        <>
        <main className="py-3">
            <div className="container text-center">

                {/* Card */}
                <div className="card p-2 w-50">

                    {/* Card Top */}
                    <div className="card-top">
                        <form>
                            <select className="form-select">
                                <option defaultValue={0}>Select the genre of movie</option>
                                <option value="1">Fantascienza</option>
                                <option value="2">Thriller</option>
                                <option value="3">Romantico</option>
                                <option value="4">Azione</option>
                            </select>
                        </form>
                    </div>

                    {/* Card Body */}
                    <div className="card-body text-start">
                        <ul>
                            {
                                movies.map((thisMovie) => (
                                    <li className="my-2">
                                        title: '{thisMovie.title}'; genre: '{thisMovie.genre}'
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