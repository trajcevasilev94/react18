import "../css/MoviesFunc.css";

export function MoviesFunc({ movies, handleClick }) {
  return (
    movies.map((movie, index) => (
    <div className="container" key={movie.id}>
      <h1>{index + 1} - {movie.name}</h1>
      <h2>{movie.genre}</h2>
      <p>{movie.plot}</p>
      <p>{movie.year}</p>
      <a href={movie.imdbLink}><img src={movie.imageUrl} alt={movie.name} /></a>
      <button onClick={() => handleClick(movie.id)}>Delete</button>
    </div>
    ))
  )
}
