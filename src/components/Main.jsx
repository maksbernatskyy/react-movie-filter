import { useState, useEffect } from "react"

// Import array of movies
import movies from "../assets/movies"

export default function Main() {

    {/* Array of movies */}
    <movies />
    
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
                            <select className="form-select">
                                <option defaultValue={0}>Selecte the genre of movie</option>
                                <option value="1">Fantascienza</option>
                                <option value="2">Thriller</option>
                                <option value="3">Romantico</option>
                                <option value="4">Azione</option>
                            </select>
                        </form>
                    </div>

                    {/* Card Bottom */}
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </main>
        </>
    )
}