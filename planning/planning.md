<h2>P3 Planning:<br/>
Ruke's Emporium <i>(an e-commerce site)</i></h2>

* Home page: welcome screen, branding/logo
    * Nav bar with categories as links to product pages
    * User login authentication - Google OAuth API

* Product pages
    * minimum three categories built for MVP (with seven total in planning)
    * minimum six products per category for MVP

* Shopping cart
    


<h4>MODELS:</h4>

* product:
    * name (string)
    * category (string)
    * image (string)
    * cost (number)

* cart:
    * item
    * qty


<h5>ICEBOX MODELS</h5>

* user
    * user id
    * contact information (address, email, phone)
    * order history (order id, order contents)

* payment:
    * payment type
    * payment API - Paypal
    * user id (ref user model)
    * order (ref order model)
    * order number (id)
    * order timestamp

* reviews
    * user reviews of product