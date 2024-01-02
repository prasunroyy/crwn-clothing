# E-Commerce Website

This is a sample application that demonstrates an E-commerce website using React Framework with FireBase as a database. The application loads products through FireBase database and displays them. User has multiple categories of clothes to choose from. Users can select items and add them to their shopping cart. Session data is stored for a user, so if a user logs back in he/she can continue shopping.

* User authentication is handled through firebase. User can also use an existing Google account to sign in.
* User can place an order using Stripe payment gateway.  

## Demonstration
Here are some screenshots of the application.

**Home Page**
![Home Page](client/src/screenshots/homePage.png?raw=true "Home Page")

**All Items Page**

Has multiple categories similar to the home page but with items as well.
![All Items Page](client/src/screenshots/CategoryPage.png?raw=true "All Items Page")

**Popup Checkout & Add an item to cart**
* User can click on ADD TO CART button to add item to the cart. 
* Shopping cart popup can be toggled by clicking the shopping bag icon. 

![Popup Checkout & Add an item to cart](client/src/screenshots/PopupCheckout.png?raw=true "Popup Checkout & Add an item to cart")

**Cart Page**

User can increase the quantity of an item, he can also remove the item from the shopping cart.
![Cart Page](client/src/screenshots/CartPage.png?raw=true "Cart Page")

**Payment using Stripe**

Payment gateway has been integrated with Stripe.
![Payment using Stripe](client/src/screenshots/PaymentPage.png?raw=true "Payment using Stripe")

**Authentication Page**

A User can register or sign in to an existing account. He may also use a google account to login.
![Authentication Page](client/src/screenshots/SignInPage.png?raw=true "Authentication Page")

## Tech Stack
* ReactJS
* Node.js
* Express.js
* FireBase

## Concepts integrated through React
* React Router 
* Hooks
* Reducer
* Sagas
* Redux