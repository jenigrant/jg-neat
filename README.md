# jenigrant.com
=============

After pulling repo:

## Option one: 
	docker build -t jenigrant/jenigrant.com .
	docker create -it jenigrant/jenigrant.com jenigrant/jenigrant.com
	docker run -d -p 80:3000 --name jenigrant.com jenigrant/jenigrant.com

## Option two:

Make sure nodejs is installed.

To build:
* npm install
* gulp build

To run:
* npm start
* Navigate to http://localhost:3000

-OR-

* Point an apache virtual host to ./public/
* Navigate to your chosen hostname

Voila