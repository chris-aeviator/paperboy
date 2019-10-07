FROM nikolaik/python-nodejs:python3.7-nodejs12
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .
RUN npm run build
COPY . .
RUN pip install -e .
COPY . .
CMD [ "python", "-m", "paperboy"]
EXPOSE 8080


