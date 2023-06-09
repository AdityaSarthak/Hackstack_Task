const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGFmMTVlOTBiMjRlMTYzMTlkNzgyNTY2OGUzOGZkMiIsInN1YiI6IjY0ODI0MzhhZTI3MjYwMDEwNzIwZmQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytipLPmvRYFhPzQThlxXPj05Nu_Gy9FdVqtSAqI1u3g'
    }
  };
//   const search=()=>{
//     let searched=document.getElementById('search').value.toUpperCase();

//   }
  let data1;
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        data1=response;
        let data=response;
        console.log(data);
        for(let i=0;i<data.results.length;i++){
        let divElement=document.getElementById('movieLists');
        const S1=document.createElement("div")
        S1.setAttribute("class","movies");
        divElement.append(S1);
        let moviePoster=document.getElementsByClassName('movies')[i];
        let imgElement = document.createElement("img");
        imgElement.src ='https://image.tmdb.org/t/p/original'+data.results[i].poster_path;
        moviePoster.append(imgElement);
        let movieTitle = document.createElement("span");
        movieTitle.innerHTML=data.results[i].title;
        S1.append(movieTitle);
        // let searched=document.getElementById('search').value.toUpperCase();
        // const search=(movieTitle,moviePoster)=>{
        //     let searched=document.getElementById('search').value.toUpperCase();
        //     let textvalue=movieTitle.textContent||movieTitle.innerHTML;
        //     if(textvalue.toUpperCase().indexOf(searched)>-1)
        //     moviePoster.getElementsByClassName.display="";
        //     else
        //     moviePoster.getElementsByClassName.display=none;
          }
        }
        )
    .catch(err => console.error(err));
    const search=()=>{
        console.log(data1)
        for(let i=0;i<data1.results.length;i++){
        let moviePoster=document.getElementsByClassName('movies')[i];
        let movieTitle=data1.results[i].title;
        console.log(movieTitle);
        let searched=document.getElementById('search').value.toUpperCase();
        let textvalue=movieTitle.textContent||movieTitle.innerHTML;
        if(movieTitle.toUpperCase().indexOf(searched)>-1)
        moviePoster.style.display="";
        else
        moviePoster.style.display="none";
      }
    }
    const node = document.getElementById("search");
    node.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("Submit").click();
    }
});