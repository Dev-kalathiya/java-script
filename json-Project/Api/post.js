const Post = (url, data) => {


    try {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default Post
