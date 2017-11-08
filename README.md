# jenigrant.com
=============

After pulling repo:

## Option one: 
	docker build -t jenigrant/jenigrant.com .
	docker create -it jenigrant/jenigrant.com jenigrant/jenigrant.com
	docker run -d -p 80:3000 --name jenigrant.com jenigrant/jenigrant.com

## Option two:
	npm install
	gulp build
	npm start

Navigate to http://localhost

-OR-

Create a proxy to port 3000 w/ Apache or nginx

Voila