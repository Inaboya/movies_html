const section = document.getElementById("root");

async function getMovies() {
  try {
    const res = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=1f118733"
    );

    const data = await res.json();

    console.log(data)

    const { Title, Year, Poster, Actors } = data;

    let output = "";

    output += `
            <div class="movie-card">

                    <div class="movie-img-container">
                        <img class="movie-img" src="${Poster}" alt="">
                    </div>

                <div class="movie-info">
                    <button class="btn" onclick="showDetails()">View Details</button>
                    <div class="movie-details" style="display:none">
                        <h4>${Title}</h4>
                        <p>${Actors}</p>
                        <p>${Year}</p>         

                    </div>
                </div>
            </div>
           
        `;

    section.innerHTML = output;
  } catch (error) {
    let output = "";

    output += `

            <div class="error">

                <h4>Something went wrong</h4>

            </div>

        `;

    section.innerHTML = output;
  }
}

getMovies();

function showDetails() {
  const details = document.querySelector(".movie-details");

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
