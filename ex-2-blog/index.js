let Blog_Of_Array=[]

const Blog_List =()=>
{
   document.getElementById("blog_item").innerHTML=""

   for(let i=0;i<Blog_Of_Array.length;i++)
   {
     
      let Blog_Element_1 = document.createElement("h2");
      Blog_Element_1.innerHTML=Blog_Of_Array[i].Blog_Title;

      let Blog_Element_2 = document.createElement("img");
      Blog_Element_2.src = Blog_Of_Array[i].Blog_Img;

      let Blog_Element_3 = document.createElement("p");
      Blog_Element_3.innerHTML=Blog_Of_Array[i].Blog_Content;

      let Blog_Element_4 = document.createElement("h4");
      Blog_Element_4.innerHTML=Blog_Of_Array[i].Blog_Category;

      let Like = document.createElement("button");
      Like.innerHTML="Like";
      Like.addEventListener("click",()=>
      {
         alert("we aprreciate your effort")
      })

      let Delete_Element = document.createElement("button");
      Delete_Element.innerHTML="Delete";

      Delete_Element.addEventListener("click",()=>
      {
         Blog_Of_Array.splice(i,1);
         Blog_List();
      })

      let Div = document.createElement("div");
      Div.append(Blog_Element_1,Blog_Element_2,Blog_Element_3,Blog_Element_4,Like, Delete_Element);
      document.getElementById("blog_item").append(Div);
   }
}

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
      Blog_Of_Array.push(Blog_Object);
     Blog_List() 
}

document.getElementById("blog_data").addEventListener("submit",blog)