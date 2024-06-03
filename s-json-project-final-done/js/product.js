import postdata from "../API/post.js";
import foot from "../components/footer.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML = nav()
document.getElementById("footer").innerHTML= foot()




// const buy = (e)=>{

//     postdata(e,"https://group-work-1.onrender.com/cart")


// }
// const adddata = (data) => {

//     data.map((ele) => {

//         let title = document.createElement("h1");
//         title.innerHTML = ele.title;

//         let img = document.createElement("img");
//         img.src = ele.url;

//         let price = document.createElement("h2");
//         price.innerHTML = ele.price;

//         let category = document.createElement("div");
//         category.innerHTML = ele.category;

//         let buynow = document.createElement("button");
//         buynow.innerHTML = "Buy Now";
//         buynow.addEventListener ("click", () => {
//             ele.quy = 1
//             buy(ele)

//         })

//         let div = document.createElement("div");
//         div.append(img, title, price, category, buynow);
//         div.setAttribute("class", "box")
//         document.getElementById("products").append(div);
//     })



// }
// Function to render products based on the filtered data
const renderProducts = (products) => {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous products

    products.forEach((product,index) => {
        const { title, url, price, category } = product;

        const productDiv = document.createElement("div");
        productDiv.classList.add("box");

        const img = document.createElement("img");
        img.src = url;
        img.alt = title;

        const titleElement = document.createElement("h1");
        titleElement.textContent = title;

        const priceElement = document.createElement("h2");
        priceElement.textContent = price;

        const categoryElement = document.createElement("div");
        categoryElement.textContent = category;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        buyButton.addEventListener("click", () => {
            // Handle buy button action here
            console.log("Buy clicked for:", title);
            alert(`Your order is in cart`)
            isCarted(product)
            
        });
        
        productDiv.append(img, titleElement, priceElement, categoryElement, buyButton);
        productsContainer.appendChild(productDiv);
    });
};

const isCarted=async (data)=>{
    console.log(data);
    try {
        let res= await fetch(`https://group-work-1.onrender.com/cart/${data.id}`);
        let data =await res.json()
    } catch (error) {
        console.log('Hi');
        fetch(`https://group-work-1.onrender.com/cart`,{
            method:"POST",
            headers:{"Content-Type": "Application/json"},
            body:JSON.stringify({...data,quy:1})
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
    }
    
}
// Function to fetch products data and initialize sorting/filtering
const initializeProducts = () => {
    fetch('https://group-work-1.onrender.com/products')
        .then(response => response.json())
        .then(data => {
            let filteredProducts = [...data]; // Initialize with all products

            const applyFilters = () => {
                const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                                              .map(input => input.value);

                if (selectedCategories.length > 0) {
                    filteredProducts = data.filter(product => selectedCategories.includes(product.category));
                } else {
                    filteredProducts = [...data]; // No category filter applied, use all products
                }

                renderProducts(filteredProducts); // Render filtered products
            };

            // Event listener for Apply Filters button
            const applyFiltersButton = document.querySelector('.btn-primary');
            applyFiltersButton.addEventListener('click', applyFilters);

            // Event listener for sorting radio buttons
            const sortingRadioButtons = document.querySelectorAll('input[name="priceSort"]');
            sortingRadioButtons.forEach(radio => {
                radio.addEventListener('change', () => {
                    const sortBy = radio.value;
                    if (sortBy === "highToLow") {
                        filteredProducts.sort((a, b) => b.price - a.price); // Sort by price high to low
                    } else if (sortBy === "lowToHigh") {
                        filteredProducts.sort((a, b) => a.price - b.price); // Sort by price low to high
                    }
                    renderProducts(filteredProducts); // Render sorted products
                });
            });

            renderProducts(filteredProducts); // Initial rendering with all products
        })
        .catch(error => console.error('Error fetching products:', error));
};

// Initialize products listing with sorting and filtering functionality
initializeProducts();





const data = () => {
    fetch('https://group-work-1.onrender.com/products')
        .then(res => res.json())
        .then(data => initializeProducts(data))


}

data()