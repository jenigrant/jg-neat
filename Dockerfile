FROM amazonlinux:latest

# Install node
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash
RUN yum install -y nodejs

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY semantic.json /usr/src/app/

# Bundle app source
COPY . /usr/src/app

RUN npm clean-install
RUN rm -rf node_packages
RUN npm install

EXPOSE 3000 
CMD [ "npm", "start" ]
