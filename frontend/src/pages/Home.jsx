import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "Terminator", release_date: "1984-10-26" },
        { id: 2, title: "John Wick", release_date: "1984-10-26" },
        { id: 3, title: "Titanic", release_date: "1984-10-26" },
    ];

    const handleSearch = () => {

    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;