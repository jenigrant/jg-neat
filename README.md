# jenigrant.com

After pulling repo:

## Option one: 
	docker build -t jenigrant/jenigrant.com .
	docker run -d -p 80:3000 --name jenigrant.com jenigrant/jenigrant.com

Proceed to http://localhost

## Option two:
Make sure node is running

	npm install
	cd ./semantic
	gulp build
	npm start

Proceed to http://localhost:3000
