const postdata = (data,url) =>{
    fetch (url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default postdata