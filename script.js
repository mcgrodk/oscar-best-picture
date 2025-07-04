const selectYear = document.getElementById("select-year")
const selectGenre = document.getElementById("select-genre")
const selectDirector = document.getElementById("select-director");
const clearBtn = document.getElementById("clear-btn");
const filmCards = document.getElementById("film-cards");

const films = [
  {
    title: "Wings",
    year: 1927,
    genre: "War drama",
    director: "William A. Wellman",
  },
  {
    title: "The Broadway Melody",
    year: 1929,
    genre: "Musical",
    director: "Harry Beaumont"
  },
  {
    title: "All Quiet on the Western Front",
    year: 1930,
    genre: "War drama",
    director: "Lewis Milestone",
  },
  {
    title: "Cimarron",
    year: 1931,
    genre: "Western",
    director: "Wesley Ruggles"
  },
  {
    title: "Grand Hotel",
    year: 1932,
    genre: "Drama",
    director: "Edmund Goulding"
  },
  {
    title: "Cavalcade",
    year: 1933,
    genre: "Drama",
    director: "Frank Lloyd"
  },
  {
    title: "It Happened One Night",
    year: 1934,
    genre: "Romantic comedy",
    director: "Frank Capra"
  },
  {
    title: "Mutiny on the Bounty",
    year: 1935,
    genre: "Historical drama",
    director: "Frank Lloyd"
  },
  {
    title: "The Great Ziegfeld",
    year: 1936,
    genre: "Musical",
    director: "Robert Z. Leonard"
  },
  {
    title: "The Life of Emile Zola",
    year: 1937,
    genre: "Biographical drama",
    director: "William Dieterle"
  },
  {
    title: "You Can't Take It with You",
    year: 1938,
    genre: "Romantic comedy",
    director: "Frank Capra"
  },
  {
    title: "Gone with the Wind",
    year: 1939,
    genre: "Historical romance",
    director: "Victor Fleming"
  },
  {
    title: "Rebecca",
    year: 1940,
    genre: "Psychological thriller",
    director: "Alfred Hitchcock"
  },
  {
    title: "How Green Was My Valley",
    year: 1941, 
    genre: "Drama",
    director: "John Ford",
  },
  {
    title: "Mrs. Miniver",
    year: 1942, 
    genre: "Romantic war drama",
    director: "William Wyler"
  },
  {
    title: "Casablanca",
    year: 1943,
    genre: "Romantic drama",
    director: "Michael Curtiz"
  },
  {
    title: "Going My Way",
    year: 1944,
    genre: "Musical",
    director: "Leo McCarey",
  },
  {
    title: "The Lost Weekend",
    year: 1945,
    genre: "Film noir",
    director: "Billy Wilder"
  },
  {
    title: "The Best Years of Our Lives",
    year: 1946,
    genre: "Drama",
    director: "William Wyler"
  },
  {
    title: "Gentleman's Agreement",
    year: 1947, 
    genre: "Drama",
    director: "Elia Kazan",
  },
  {
    title: "Hamlet",
    year: 1948,
    genre: "Drama",
    director: "Laurence Olivier",
  },
  {
    title: "All the King's Men",
    year: 1949,
    genre: "Political drama",
    director: "Robert Rossen"
  },
  {
    title: "All About Eve",
    year: 1950,
    genre: "Drama",
    director: "Joseph L. Mankiewicz"
  },
  {
    title: "An American in Paris",
    year: 1951,
    genre: "Musical",
    director: "Vincente Minnelli"
  },
  {
    title: "The Greatest Show on Earth",
    year: 1952, 
    genre: "Drama",
    director: "Cecil B. DeMille"
  },
  {
    title: "From Here to Eternity",
    year: 1953,
    genre: "War drama",
    director: "Fred Zinnemann"
  },
  {
    title: "On the Waterfront",
    year: 1954,
    genre: "Crime drama",
    director: "Elia Kazan"
  },
  {
    title: "Marty",
    year: 1955,
    genre: "Romantic drama",
    director: "Delbert Mann"
  },
  {
    title: "Around the World in 80 Days",
    year: 1956,
    genre: "Adventure comedy",
    director: "Michael Anderson"
  },
  {
    title: "The Bridge on the River Kwai",
    year: 1957,
    genre: "War drama",
    director: "David Lean"
  },
  {
    title: "Gigi",
    year: 1958,
    genre: "Musical",
    director: "Vincente Minnelli"
  },
  {
    title: "Ben-Hur",
    year: 1959,
    genre: "Religious epic",
    director: "William Wyler"
  },
  {
    title: "The Apartment",
    year: 1960,
    genre: "Comedy drama",
    director: "Billy Wilder"
  },
  {
    title: "West Side Story",
    year: 1961,
    genre: "Musical",
    director: ["Robert Wise", "Jerome Robbins"]
  },
  {
    title: "Lawrence of Arabia",
    year: 1962,
    genre: "Biographical drama",
    director: "David Lean"
  },
  {
    title: "Tom Jones",
    year: 1963,
    genre: "Period comedy",
    director: "Tony Richardson"
  },
  {
    title: "My Fair Lady",
    year: 1964,
    genre: "Musical",
    director: "George Cukor"
  },
  {
    title: "The Sound of Music",
    year: 1965,
    genre: "Musical",
    director: "Robert Wise"
  },
  {
    title: "A Man for All Seasons",
    year: 1966,
    genre: "Historical drama",
    director: "Fred Zinnemann"
  },
  {
    title: "In the Heat of the Night",
    year: 1967,
    genre: "Mystery drama",
    director: "Norman Jewison"
  },
  {
    title: "Oliver!",
    year: 1968,
    genre: "Musical",
    director: "Carol Reed"
  },
  {
    title: "Midnight Cowboy",
    year: 1969,
    genre: "Drama",
    director: "John Schlesinger"
  },
  {
    title: "Patton",
    year: 1970,
    genre: "Biographical drama",
    director: "Franklin J. Schaffner"
  },
  {
    title: "The French Connection",
    year: 1971,
    genre: "Neo-noir action thriller",
    director: "William Friedkin"
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime drama",
    director: "Francis Ford Coppola"
  },
  {
    title: "The Sting",
    year: 1973,
    genre: "Heist film",
    director: "George Roy Hill"
  },
  {
    title: "The Godfather Part II",
    year: 1974,
    genre: "Crime drama",
    director: "Francis Ford Coppola"
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    genre: "Comedy drama",
    director: "Miloš Forman"
  },
  {
    title: "Rocky",
    year: 1976,
    genre: "Sports drama",
    director: "John G. Avildsen",
  },
  {
    title: "Annie Hall",
    year: 1977,
    genre: "Romantic comedy drama",
    director: "Woody Allen"
  },
  {
    title: "The Deer Hunter",
    year: 1978,
    genre: "War drama",
    director: "Michael Cimino"
  },
  {
    title: "Kramer vs. Kramer",
    year: 1979,
    genre: "Legal drama",
    director: "Robert Benton"
  },
  {
    title: "Ordinary People",
    year: 1980,
    genre: "Drama",
    director: "Robert Redford"
  },
  {
    title: "Chariots of Fire",
    year: 1981, 
    genre: "Sports drama",
    director: "Hugh Hudson"
  },
  {
    title: "Gandhi",
    year: 1982,
    genre: "Biographical drama",
    director: "Richard Attenborough"
  },
  {
    title: "Terms of Endearment",
    year: 1983,
    genre: "Family tragicomedy",
    director: "James L. Brooks"
  },
  {
    title: "Amadeus",
    year: 1984,
    genre: "Biographical drama",
    director: "Miloš Forman"
  },
  {
    title: "Out of Africa",
    year: 1985,
    genre: "Romantic drama",
    director: "Sydney Pollack"
  },
  {
    title: "Platoon",
    year: 1986,
    genre: "War drama",
    director: "Oliver Stone"
  },
  {
    title: "The Last Emperor",
    year: 1987,
    genre: "Biographical drama",
    director: "Bernardo Bertolucci"
  },
  {
    title: "Rain Man",
    year: 1988,
    genre: "Comedy drama",
    director: "Barry Levinson"
  },
  {
    title: "Driving Miss Daisy",
    year: 1989,
    genre: "Comedy drama",
    director: "Bruce Beresford"
  },
  {
    title: "Dances With Wolves",
    year: 1990,
    genre: "Western",
    director: "Kevin Costner"
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Psychological thriller",
    director: "Jonathan Demme"
  },
  {
    title: "Unforgiven",
    year: 1992,
    genre: "Western",
    director: "Clint Eastwood"
  },
  {
    title: "Schindler's List",
    year: 1993,
    genre: "Historical epic",
    director: "Steven Spielberg"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Comedy drama",
    director: "Robert Zemeckis"
  },
  {
    title: "Braveheart",
    year: 1995,
    genre: "Historical epic",
    director: "Mel Gibson"
  },
  {
    title: "The English Patient",
    year: 1996,
    genre: "War drama",
    director: "Anthony Minghella"
  },
  {
    title: "Titanic",
    year: 1997,
    genre: "Romantic drama",
    director: "James Cameron"
  },
  {
    title: "Shakespeare in Love",
    year: 1998,
    genre: "Romantic comedy",
    director: "John Madden"
  },
  {
    title: "American Beauty",
    year: 1999,
    genre: "Comedy drama",
    director: "Sam Mendes"
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "Historical epic",
    director: "Ridley Scott"
  },
  {
    title: "A Beautiful Mind",
    year: 2001,
    genre: "Biographical drama",
    director: "Ron Howard"
  },
  {
    title: "Chicago",
    year: 2002,
    genre: "Musical",
    director: "Rob Marshall"
  },
  {
    title: "The Lord of the Rings: Return of the King",
    year: 2003,
    genre: "Fantasy adventure",
    director: "Peter Jackson"
  },
  {
    title: "Million Dollar Baby",
    year: 2004,
    genre: "Sports drama",
    director: "Clint Eastwood"
  },
  {
    title: "Crash",
    year: 2004,
    genre: "Crime drama",
    director: "Paul Haggis"
  },
  {
    title: "The Departed",
    year: 2006,
    genre: "Crime thriller",
    director: "Martin Scorsese"
  },
  {
    title: "No Country for Old Men",
    year: 2007,
    genre: "Neo-western crime thriller",
    director: ["Joel Coen", "Ethan Coen"]
  },
  {
    title: "Slumdog Millionaire",
    year: 2008,
    genre: "Drama",
    director: "Danny Boyle"
  },
  {
    title: "The Hurt Locker",
    year: 2008,
    genre: "War action thriller",
    director: "Kathryn Bigelow",
  },
  {
    title: "The King's Speech",
    year: 2010,
    genre: "Historical drama",
    director: "Tom Hooper"
  },
  {
    title: "The Artist",
    year: 2011,
    genre: "Comedy drama",
    director: "Michel Hazanavicius",
  },
  {
    title: "Argo",
    year: 2012,
    genre: "Espionage thriller",
    director: "Ben Affleck",
  },
  {
    title: "12 Years a Slave",
    year: 2013,
    genre: "Biographical drama",
    director: "Steve McQueen",
  },
  {
    title: "Birdman or (The Unexpected Virtue of Ignorance)",
    year: 2014,
    genre: "Comedy drama",
    director: "Alejandro G. Iñárritu",
  },
  {
    title: "Spotlight",
    year: 2015,
    genre: "Biographical drama",
    director: "Tom McCarthy"
  },
  {
    title: "Moonlight",
    year: 2016,
    genre: "Coming of age drama",
    director: "Barry Jenkins"
  },
  {
    title: "The Shape of Water",
    year: 2017,
    genre: "Period romantic dark fantasy",
    director: "Guillermo del Toro"
  },
  {
    title: "Green Book",
    year: 2018,
    genre: "Biographical drama",
    director: "Peter Farrelly"
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Comedy thriller",
    director: "Bong Joon Ho",
  },
  {
    title: "Nomadland",
    year: 2020,
    genre: "Drama",
    director: "Chloé Zhao"
  },
  {
    title: "CODA",
    year: 2021,
    genre: "Coming of age drama",
    director: "Sian Heder"
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Absurdist comedy drama",
    director: ["Daniel Kwan", "Daniel Scheinert"]
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "Biographical drama",
    director: "Christopher Nolan"
  },
  {
    title: "Anora",
    year: 2024,
    genre: "Romantic comedy drama",
    director: "Sean Baker"
  }
]

function createFilmCards(array) {
  array.forEach(film => {
    const filmCard = document.createElement("div");
    filmCard.classList.add("film-card");
    filmCard.innerHTML += `<p>Title: ${film.title}</p>`;
    filmCard.innerHTML += `<p>Year: ${film.year}</p>`;
    filmCard.innerHTML += `<p>Genre: ${film.genre}</p>`;
    if (Array.isArray(film.director)) {
      // Adds space after comma if film has 2 directors
      filmCard.innerHTML += `<p>Director: ${film.director[0]}, ${film.director[1]}</p>`
    } else filmCard.innerHTML += `<p>Director: ${film.director}</p>`;
    filmCards.appendChild(filmCard);
  })
}

function updateDisplay() {
  filmCards.innerHTML = "";
  const yearValue = selectYear.value;
  const genreValue = selectGenre.value;
  const directorValue = selectDirector.value;
  
  const filteredFilms = films.filter(film => {
    // Make variables that check matches
    const matchesYear = !yearValue || Number(yearValue) === film.year;
    const matchesGenre = !genreValue || genreValue === film.genre;
    const matchesDirector = !directorValue || (
      Array.isArray(film.director) 
      ? film.director.includes(directorValue) 
      : directorValue === film.director
      );
    return matchesYear && matchesGenre && matchesDirector;
  });
  createFilmCards(filteredFilms);
}

function clearFilters() {
  filmCards.innerHTML = "";
  selectYear.value = "";
  selectGenre.value = "";
  selectDirector.value = "";
  createFilmCards(films);
}

selectYear.addEventListener("change", updateDisplay);
selectGenre.addEventListener("change", updateDisplay);
selectDirector.addEventListener("change", updateDisplay);
clearBtn.addEventListener("click", clearFilters);

// Builds "Year" dropdown menu
let yearsArr = []
for (let i = 0; i < films.length; i++) {
  /* Ensures that each year only appears once in dropdown since there are multiple 
   winning films released in certain years */
    if (yearsArr.includes(films[i].year)) {
      continue;
    } else yearsArr.push(films[i].year);
  }
yearsArr.forEach(year => {
  selectYear.innerHTML += `<option value="${year}">${year}</option>`
})

// Builds "Genre" dropdown menu
let genresArr = []
for (let i = 0; i < films.length; i++) {
  if (genresArr.includes(films[i].genre)) {
    continue;
  } else genresArr.push(films[i].genre);
}
// Alphabetizes genres before adding to dropdown
genresArr.sort().forEach(genre => {
  selectGenre.innerHTML += `<option value="${genre}">${genre}</option>`
})

// Builds "Director" dropdown menu
directorsArr = [];
for (let i = 0; i < films.length; i++) {
  if (directorsArr.includes(films[i].director)) {
    continue;
    // Checks if a film has 2+ directors (value is array rather than string)
  } else if (Array.isArray(films[i].director)) {
    // Runs a for loop for each director; d is director in array
    for (let d = 0; d < films[i].director.length; d++) {
     directorsArr.push(films[i].director[d])
    }
  } else directorsArr.push(films[i].director);
}

/* Sorts array by taking one name at a time, slicing out each last name, 
then comparing alphabetically to another */
directorsArr.sort((a, b) => {
  const lastA = a.split(" ").slice(-1)[0].toLowerCase();
  const lastB = b.split(" ").slice(-1)[0].toLowerCase();
  return lastA.localeCompare(lastB);
});

directorsArr.forEach(name => {
  let nameSplit = name.split(" ");
  if (nameSplit.length === 3) {
    selectDirector.innerHTML += `<option value="${name}">${nameSplit[2]}, ${nameSplit[0]} ${nameSplit[1]}</option>`;
  } else selectDirector.innerHTML += `<option value="${name}">${nameSplit[1]}, ${nameSplit[0]}</option>`
})

createFilmCards(films);