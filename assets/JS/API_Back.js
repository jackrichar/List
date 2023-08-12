fetch('http://moviesapi.ir/api/v1/movies?page={page}')
    .then(res => res.json())
    .then(responseData => {
        const movies = responseData.data;
        console.log(responseData.data)
        movies.forEach(movie => {
            document.querySelector('.Movie_info').insertAdjacentHTML
            ('beforeend',
                `
                <tr class="info">
                    <td>${movie.id}</td>
                    <td>${movie.title}</td>
                    <td>${movie.year}</td>
                    <td>${movie.country}</td>
                    <td>${movie.genres}</td>
                    <td>${movie.imdb_rating}</td>
                    <td><img class="img" src="${movie.poster}" alt=""></td>
                </tr>
                
                `
            );
            console.log(movie.id,movie.title,movie.poster,movie.year);
        });
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
