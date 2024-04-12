export default function addToMyList({ movie, title, type }) {
    // Retrieve existing list from local storage or initialize an empty array
    const myList = JSON.parse(localStorage.getItem("myList")) || [];

    // Check if movieId is already in the list
    if (!myList.includes(movie)) {
        // If not, add it to the list
        myList.push({title: title, id: movie.id, poster: movie.poster_path, type: type});

        // Save the updated list back to local storage
        localStorage.setItem("myList", JSON.stringify(myList));
        
        alert("Movie added to your list!");
    } else {
        alert("This movie is already in your list!");
    }
}

async function displayMyList(movies) {
    try {
        const myList = JSON.parse(localStorage.getItem("myList"));

        myList.forEach(list => {
            console.log(list)
        });

    } catch (error) {
        console.error(error);
    }
}

displayMyList();