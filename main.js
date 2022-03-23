/* const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]; */


// Callbacks

/* const findPostById = (id, callback) => {
    
    const post = posts.find(item => item.id === id);

    if (post) {
        callback(null, post) //El null hace referencia al string del error de abajo.
    } else {
        //respuesta en el error.
        callback("no se encontro el post con id " + id);
    }

};

findPostById(4, (err, post) => {
    if (err) {
        return console.log(err);
    }
    console.log(post);
}); */


//Promises (Otra forma de hacerlo)

/* const findPostById = (id) => {

    const post = posts.find(item => item.id === id);

    return new Promise ((resolve, reject) => {

        if (post) {
            resolve (post);
        } else {
            reject ("no se encontro el post con id " + id);
        }
    })
} */

/* findPostById(4)
    .then((post) => console.log(post))
    .catch (err => console.log(err)); */

// Promises con Async / Await (solo en promises)

/* const buscarPost = async (id) => {

    try {
        const post = await findPostById(id);
        console.log(post);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("este console se ejecuta si o si");
    }
};

buscarPost (1); */

// Fetch
 
const url = 'https://jsonplaceholder.typicode.com/posts/'

/* fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("finalizar")); */

const findPostById = async (id) => {

    try {
        const response = await fetch(url + id);
        const post = await response.json();

        console.log(post);

    } catch (err) {
        console.log(err);
    }
};

findPostById(10);


