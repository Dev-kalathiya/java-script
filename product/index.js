let contant_Of_Array=JSON.parse(localStorage.getItem('Blog_Object'))||[]

const Blog_List =()=>
{
   document.getElementById("blog_item").innerHTML=""

   for(let i=0;i<contant_Of_Array.length;i++)
   {
     
      let Blog_Element_1 = document.createElement("h2");
      Blog_Element_1.innerHTML=contant_Of_Array[i].Blog_Title;

      let Blog_Element_2 = document.createElement("img");
      Blog_Element_2.src = contant_Of_Array[i].Blog_Img;

      let Blog_Element_3 = document.createElement("p");
      Blog_Element_3.innerHTML=contant_Of_Array[i].Blog_Content;

      let Blog_Element_4 = document.createElement("h4");
      Blog_Element_4.innerHTML=contant_Of_Array[i].Blog_Category;


      let Div = document.createElement("div");
      Div.append(Blog_Element_1,Blog_Element_2,Blog_Element_3, Blog_Element_4);
      document.getElementById("blog_item").append(Div);
   }
}
 Blog_List();
const blog = (e) =>
{
    e.preventDefault();
      let Blog_Title = document.getElementById("blog_title").value;
      let Blog_Img = document.getElementById("blog_img").value;
      let Blog_Content = document.getElementById("blog_content").value;
      let Blog_Category = document.getElementById("blog_category").value;


      let Blog_Object = {
         Blog_Title : Blog_Title,
         Blog_Img : Blog_Img,
         Blog_Content : Blog_Content,
         Blog_Category: Blog_Category,
      };
      contant_Of_Array.push(Blog_Object);
     Blog_List()
     localStorage.setItem("Blog_Object",JSON.stringify(contant_Of_Array)) ;
}

document.getElementById("blog_data").addEventListener("submit",blog)