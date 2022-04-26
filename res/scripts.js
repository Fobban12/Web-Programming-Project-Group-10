
//Loop should be here, remove this later when done
//Pictures should come from the database
function frontPage(){
$('#Content').html(`
   <div>
    <div id="Deals">
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
     <img src="./images/amdDeals.jpg" id="DealPictures"></img>
    </div>
   
    <div id="FrontPageTitle">Popular</div>
    <div id="ProductsPopular">
    </div>
   
   <div id="FrontPageTitle">Recommended</div>
    <div id="ProductsRecommended">
     
    </div>
   </div>
   `
   );
   //For showing products on the Main page for the popular tag
   for (let i=0; i < productsTest.length; i++)
   {
   
   $('#ProductsPopular').append(`
    <div id="Product">
     <img src="${productsTest[i].Image}" id="ProductPictures">
     <div>${productsTest[i].Name}</div>
     <div>${productsTest[i].Info}</div>
     <div>-Info</div>
     <div>-Info</div>
     <div>-Info</div>
     <div>${productsTest[i].Price}€</div>
   </div>
   `
      )
     }
   for (let i=0; i < productsTest2.length; i++)
   {
      $('#ProductsRecommended').append(`
      <div id="Product">
       <img src="${productsTest[i].Image}" id="ProductPictures">
       <div>${productsTest[i].Name}</div>
       <div>${productsTest[i].Info}</div>
       <div>-Info</div>
       <div>-Info</div>
       <div>-Info</div>
       <div>${productsTest[i].Price}€</div>
     </div>
     `
        )

   }


};


// Data that comes should be based on the pressed categorys unique ID, so in other words, it will show the items that the category ID is assigned to.
//Loop should be here, remove this later when done
// The structure of the HTML will be different, on a later date
function productCategoryView()
{
$('#Content').html(`

   <div id="CategoryTitle">Graphic Cards</div>

   <div id="CategoryProducts">


    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

    <div id ="CategoryProduct" onclick="productDetailView()">
      <img src="./images/amdDeals.jpg" id="CategoryImages"> 
      <div id="CategoryInfo">Title</div>
      <div id="CategoryInfo">Short Info</div> 
      <div id="CategoryInfo">Availability:1</div> 
      <div id="CategoryInfo">Add to cart</div>  
    </div>

   </div>
   `
   );
}

// A loop here, and the data should come from the pressed product ID tree: Category -> SubCategory -> Specific product
// The structure of the HTML will be different, on a later date
//Loop should be here, remove this later when done
function productDetailView()
{


   $('#Content').html(`
   <div id="ProductWholeDetailView"> 
    <img src="./images/amdDeals.jpg" id="DetailViewIamges">
      <div>
       <div>RX 6600XT</div>
       <div>RX 6600XT</div>
       <div>RX 6600XT</div>
       <div>RX 6600XT</div>
       <div>RX 6600XT</div>
      </div>

      <div>
       <div>Price: 350€ </div>
       <div>Add to cart</div>
      </div>
    </div>
  <div id="ProductInfoButtons">
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Info</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
   <div id="ProductInfoButton" onclick="productInfoAreaClick()">Hello</div>
  </div>
  <div id="ProductInfoArea">
   <div>Hello</div>
   <div>Hello</div>
   <div>Hello</div>
  </div>

   `
   );
}

function productInfoAreaClick()
{
$('#ProductInfoArea').html(`<div>test</div>`)
}



//Loop will be done a bit later, this is just for testing.
// The structure of the HTML will be different, on a later date
function sideBar(){
   $('#SideBar').html(`
    <div id="sideBarCSS">
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[0].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[1].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
     <div id="sideBarNames"> <span onclick="productCategoryView()">${category[2].Name}</span> <button id="categoryArrow" onclick="subCategory()"> > </button></div>
    </div>
    `),$('#SideBar').toggleClass("show")
   };
   
   //This should show the right subcategories based from the category unique id, will be implemented later, will loop trough all the subcategories
   //The structure of the HTML will be different, on a later date

   function subCategory()
   {
      $('#subCategory').html(`
      <div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[1].Name}</div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[0].Name}</div>
       <div id="sideBarNames" onclick="productCategoryView()">${category[2].Name}</div>
      </div>
      `),$('#subCategory').toggleClass("show")
     };
   

// The structure of the HTML will be different, on a later date
function cart()
{
$('#Content').html(`






<div id="CartTitle">Cart</div>
<div id="WholeCart">
<div id="CartProduct">
 <img src="./images/amdDeals.jpg" id="CartImage">
 <div>Stuff</div>
 <div>Stuff</div>
</div>
 
</div>






`)
}


//Loop later, use jquery each()
//For showing the small shopping cart
$('#CartMini').html(`

<div id="CartMiniTitle">Cart</div>
 <div id="CartMiniItem">
  <img src="./images/amdDeals.jpg" id="CartMiniImage">
  <div>
 
   <div>6600XT</div>
   <div>In stock</div>
   <div>Add more products</div>
 
  </div>
  <div>Price</div>
 
 </div>

 <div id="CartMiniItem">
 <img src="./images/amdDeals.jpg" id="CartMiniImage">
 <div>

  <div>6600XT</div>
  <div>In stock</div>
  <div>Add more products</div>

 </div>
 <div>Price</div>

</div>

<div id="CartMiniItem">
<img src="./images/amdDeals.jpg" id="CartMiniImage">
<div>

 <div>6600XT</div>
 <div>In stock</div>
 <div>Add more products</div>

</div>
<div>Price</div>

</div>

<div id="CartMiniItem">
<img src="./images/amdDeals.jpg" id="CartMiniImage">
<div>

 <div>6600XT</div>
 <div>In stock</div>
 <div>Add more products</div>

</div>
<div>Price</div>

</div>

 <div id="CartMiniTotalPrice">Total Price stuff</div>

 <div>Buttons</div>

 
`)
$('#CartInfo').on('mouseover',function()
{
$('#CartMini').show()

}

).on('mouseout',function(){
   $('#CartMini').hide()
})



// The structure of the HTML will be slightly different, on a later date
function login()
{
$('#Content').html(`


<div id="LoginAndRegister"> 
 <div id="LoginAndRegisterBox">
  <div onclick="frontPage()"> Go back </div>
  <div>Register or login here</div>
  <div>Email: <input type="email"></input></div>
  <div>Password: <input type="password"></input> </div>
  <div>Login or register</div>
 </div>
</div>


`)
}




function AboutUs(){$('#Content').html(`


<div>About us stuff</div>


`)}


//Shows and hides the sidebar, and will also hide the subCategory if shown
$('#Categories').on("click",function(){
   if ($('#subCategory').hasClass("show") == true)
   {
         $('#subCategory').toggleClass("show"); $('#SideBar').toggleClass("show")
   } 
   else {sideBar()}});










function searchBar()
{


}


//For testing
const category = 
    [    
     {
      id:1,
      Name:"Components"
     },
     {
        id:2,
        Name:"TV'S"
     },
     {
        id:3,
        Name:"Some stuff"
     },
     {
      id:4,
      Name:"Hello"
   },
   {
      id:5,
      Name:"Testing"
   },
   {
      id:6,
      Name:"The lenght"
   }
    ]

const productsTest = [{id:1,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:2,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:3,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:4,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:5,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:6,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:7,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"}

]


const productsTest2 = [{id:1,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:2,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:3,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:4,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:5,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:6,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:7,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"},
{id:8,Name:"RX6600XT", Image:"./images/amdDeals.jpg", Price:450, Info:"A gpu"}
]


















