# ecom
eCommerce internal/external apis


Install / Run instructions
=====

- Fork / Download repo
- If using docker then run the following command
   - docker-compose up
- Without docker, read below on how to run
- Enter server folder and run the following commands
   - npm install (to install the dependencies)
   - node index.js

- Backend/Server Runs on http://localhost:3000/


Troubleshooting:
=====

- Pool overlaps with other one on this address space
   - Solution #1: call `docker network prune` after calling it, please press y and then call `docker-compose up`
   - Solution #2: call `docker-compose down` and then call `docker network prune`, finally, call `docker-compose up`
- ERROR: for mongo_db_cont  Cannot start service mongo: network 3a8421f766626d0f8417f7de93cff19de064f2769b693cb6643c28c7b914dc09 not found
   - Solution #1: call `docker container rm service_name` and then call `docker-compose up`


Features:
=====

- Internal API
   - Create product http://localhost:3000/iapi/product (POST) with proper JSON as input
   - Create shopper http://localhost:3000/iapi/shopper (POST) with proper JSON as input
- External API
   - Get products by shopper http://localhost:3000/eapi/pbys/ (GET) where shopper id is mandatory follows by optional limit/category/brand
   - Get shoppers by product http://localhost:3000/eapi/sbyp/ (GET) where product id is mandatory follows by optional limit
   - Get all products (GET) http://localhost:3000/eapi/products
   - Get all shoppers (GET) http://localhost:3000/eapi/shoppers
- Store to local MongoDB server 


About:
=====

- Author: Daniel Reznick
- Backend: Node.js
- DB: MongoDB
