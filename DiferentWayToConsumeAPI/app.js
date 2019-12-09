
//FORMA ANTIGUA, ES UN POCO ENGORROSA
const getNombre = (idPost) => {
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    fetch(url + idPost)
        .then(rcv => { return rcv.json(); })
        .then(post => {
            console.log(post.userId);
            fetch(url.replace("posts", "users") + post.userId)
                .then(rcv => { return rcv.json(); })
                .then(user => {
                    console.log("OLD         -> ", user.name);
                })
        })
}

getNombre(80);

//ASYNC AWAIT
const getNombreAsync = async (idPost) => {
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    try {
        const resPost = await fetch(url + idPost);
        const post = await resPost.json();
        const resUser = await fetch(url.replace("posts", "users") + post.userId);
        const user = await resUser.json();
        console.log("ASYNC AWAIT -> ", user.name);
    } catch (error) {
        console.log(error);
    }

}

getNombreAsync(80);

//USANDO LA LIBRERIA AXIO
const getNombreAxios = async (idPost) => {
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    try {
        const resPost = await axios(url + idPost);
        const resUser = await axios(url.replace("posts", "users") + resPost.data.userId);
        console.log("AXIOS	    -> ",resUser.data.name);
    } catch (error) {
        console.log(error);
    }
}

getNombreAxios(80);