// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielberg = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const arrayScore = moviesArray.map(movie => movie.score);
  const nonZeroScore = arrayScore.filter(score => typeof score === 'number');
  const sum = nonZeroScore.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const average = sum / arrayScore.length;

  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter(movie => {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyArray = [...moviesArray];
  copyArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return copyArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const cloneArray = [...moviesArray];
  const sortedArray = cloneArray.sort((a, b) => a.title.localeCompare(b.title));
  const movieTitle = sortedArray.map(movie => movie.title);
  return movieTitle.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  copiedArr = JSON.parse(JSON.stringify(moviesArray));
  copiedArr.map(movie => {
    if (movie.duration.includes('min')) {
      const hourMin = movie.duration.split(' ');
      const hour = parseInt(hourMin[0].replace('h', '')) * 60;
      const min = parseInt(hourMin[1].replace('min', '')) * 1;
      movie.duration = hour + min;
    } else {
      const hour = parseInt(movie.duration.replace('h', '')) * 60;
      movie.duration = hour;
    }

    return movie;
  });
  return copiedArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/*function bestYearAvg(moviesArray) {
  const orderMovies = orderByYear(moviesArray);
  const firstYear = orderMovies[0].year;
  const lastYear = orderMovies[orderMovies.length - 1].year;
  const yearsAndAver = [];
  const yearMovie = [];

  orderMovies.map(movie => {
    for (i = firstYear; i <= lastYear; i++) {
      if (movie.year === i) {
        yearMovie.push(movie.score);
      }

      const bestYear = { year: i, average: scoresAverage(yearMovie) };
      yearsAndAver.push(bestYear);
    }

    yearsAndAver = yearsAndAver.sort((a, b) => a.average - b.average);

    return yearsAndAver;
  });

  return `The best year was ${yearsAndAver[0].year} with an average score of ${yearsAndAver[0].average}`;
}*/
