import {movieData} from "./data";
import * as $ from "jquery";
import { Review } from "./interfaces";


//let $ = require("./node_modules/jquery");
//let movieData = require("./data");
function renderMovie(movie:Review){

   // console.log("funka denna??? jag?", movie);
    let title = document.getElementById("movieTitle");
    title.innerText = movie.movieTitle;
    
    let info = document.getElementById("movieInfo");
    info.innerText = movie.movieParagraph;
    
    let imageIndex = document.getElementById("moviePicture");
    imageIndex.setAttribute("src", movie.moviePicture);
    
    // var text= document.getElementById("movieActors").innerHTML;


    for (let i = 0; i < movie.movieActors.length; i++) {
        console.log("for loop2", movie.movieActors[i]);
        var node = document.createElement("li");
        var textnode = document.createTextNode(movie.movieActors[i]);
        node.appendChild(textnode); 
        document.getElementById("movieActors").appendChild(node);
        // document.querySelector(".movieActors").appendChild(node);
    }
}

function changeStarRating(rating){

    for(let i = 1; i <= 5; i++){
        const star = document.getElementById("star" + i);
        if (i <= rating){
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    }
}

for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
        changeStarRating(i);
    });
}

renderMovie(movieData);