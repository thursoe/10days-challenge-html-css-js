const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGU2ZmQzODQzMDlkMmQ0MjE0NDJkNGYzNzI0MDhkNyIsIm5iZiI6MTcyMzExMjU4OC4zNTUyODYsInN1YiI6IjY2YjQ5YjVjNTA4Mzg0ZDIzZjhiNmY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yosSPrG9871umzAA2F2EP19bFWwwjEre30fanXeHhyE";

const BASE_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w342";

let PAGE_NO = 1;

async function getMovies(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  const data = await res.json();

  return data.results;
}

async function showMovies() {
  const mainSection = document.querySelector("#main-contents");

  const movies = await getMovies(BASE_URL + `&page=${PAGE_NO}`); // fetch data from server

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    const CardComponent = `<img src="${IMG_BASE_URL + movie.poster_path}"/><p>${
      movie.title
    }</p><div><span>${movie.release_date}</span><span>${
      movie.vote_average
    }</span></div>`;

    movieCard.innerHTML = CardComponent;

    mainSection.appendChild(movieCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showMovies();

  const loadBtn = document.querySelector("#load-btn");
  loadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    PAGE_NO++;
    showMovies();
  });
});
