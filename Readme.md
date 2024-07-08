The Application Named Micro-Front_Ecom is Micro Front End Application having 4 Application inside.

i>  A Product List Application to show Lists of Product to be available for Selling named Product-List.

ii> A Cart Application to get the Products available in Cart to buy named Cart.

iii> A Checkout Application where user Enter the Checkout Details like Name and Address and Place Order.

iv>  An ECom Application which is a Shell Application fot All other three Application and also it contains, Redux Store and Header Component as well.


For MicroFrontEnd Application, I used create-mf-app to build the Application with React and Javascript.

Here I Used Static Product List as Array of Object containing Details of Product which You can find in Code of
Product-List Aplication's Assets inside of src folder.

I also used shared key in Module Federation so that the react Library Only Loads for 1 Time.

How to Start the Project

i> Type Command "npm i" and "npm start" so that the Project can have node_modules and can run.

ii>  Above Command is for Every Project 

iii>  We Should Run the Ecom Project at Last as it is Container of all other Project, first we need to start Project in   
      given Order

      a. Product-List Folder
      b. Cart Folder
      c. Checkout Folder.

iv> Product-List will run on PORT 3001

v> Cart will run on PORT 3006

vi> Checkout will run on PORT 3003

vii> Ecom - Shell Application will run on PORT 3000 

viii> After Running the All Projects

      a) Select the Product on Home Screen by adding into cart.
      b) Clicking on Cart will Redirect to Cart Application where You can 
         get all Cart items and you can also Modify the Cart Item present.
      c) There is checkout button which Redirect You to Checkout Page



=> Steps to Use Application

i> Select Product and Add to Cart
ii>  Click on Cart placed at header.
iii> Click Proceed to Checkout Button to Go Checkout Page.


Thank You
