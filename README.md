# adanianlabs-interview-task
 ## runn the api

1. clone the repository to your machine.

```#!/bin/bash
git clone <url>
```

2. install dependancies

```#!/bin/bash
yarn install
```

3. run the api

```#!/bin/bash
yarn dev
```

### users
to register a user:
<br>
paste this url to postman or any other api testing service
```#!/bin/bash
http://localhost:5000/api/user/signup
```
<br>
and send this type of request
```#!/bin/bash
http://localhost:5000/api/user/signup
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
