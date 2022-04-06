# adanianlabs-interview-task
 ## run the api

1. clone the repository to your machine.

```#!/bin/bash
git clone https://github.com/sankaire/adanianlabs-interview-task.git
```

2. install dependancies

```#!/bin/bash
yarn install
```

3. run the api

```#!/bin/bash
yarn dev
```
mongo uri
```#!/bin/bash
 mongodb+srv://tepela:ZAS0706x@cluster0.ns3va.mongodb.net/adanian?retryWrites=true&w=majority
```
set it on the .env file as MONGO_URI=
### users
to register a user:
<br>
paste this url to postman or any other api testing service
```#!/bin/bash
http://localhost:5000/api/user/signup
```
and send this type of request
```#!/bin/bash
{
    "name":"Peter Tepela",
    "email":"tepela@gmail.com",
    "password":"sdfgfgh"
   
}
```
make sure to use the post verb
<br>
to get user
```#!/bin/bash
 http://localhost:5000/api/user/login
```
use the get verb

### products
get all products
```#!/bin/bash
 http://localhost:5000/api/products
```
use the get verb
<br>
post a new product
```#!/bin/bash
{
    "title":"Bur",
    "desc":"delicious burger",
    "img":"http://img.com",
    "categories":"food",
    "price":1223,
    "size":"large"
}
```
update product

```#!/bin/bash
 http://localhost:5000/api/products/:id
```
use the put verb 
<br>
make your updates and send
<br>

delete product
```#!/bin/bash
 http://localhost:5000/api/products/:id
```
use the delete verb

### orders
update order

```#!/bin/bash
 http://localhost:5000/api/orders/:id
```
use the put verb 
<br>
make your updates and send
<br>

delete order
```#!/bin/bash
 http://localhost:5000/api/orders/:id
```
use the delete verb
get all orders
```#!/bin/bash
 http://localhost:5000/api/orders
```
use the get verb
<br>

### checkout
to checkout you have to be logged in
```#!/bin/bash
 http://localhost:5000/api/checkout
```
