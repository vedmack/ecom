# ecom
eCommerce internal/external apis


Install / Run instructions
=====

- Fork / Download repo
- Enter server folder and run the following commands
   - npm install (to install the dependencies)
   - node index.js

- Backend/Server Runs on http://localhost:3000/


Features:
=====

- Internal API
   - Create product http://localhost:3000/iapi/product (POST) with proper JSON as input
   - Create shopper http://localhost:3000/iapi/shopper (POST) with proper JSON as input
- External API
   - Get products by shopper http://localhost:3000/eapi/pbys/ (GET) where shopper id is mandatory follows by optional limit/category/brand
   - Get shoppers by product http://localhost:3000/eapi/sbyp/ (GET) where product id is mandatory follows by optional limit
- Store to local MongoDB server 


About:
=====

- Author: Daniel Reznick
- Backend: Node.js
- DB: MongoDB
