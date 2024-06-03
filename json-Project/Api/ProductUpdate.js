const HandleQty=(data)=>{

    try {
        fetch(`https://group-work-1.onrender.com/cart/${data.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default HandleQty