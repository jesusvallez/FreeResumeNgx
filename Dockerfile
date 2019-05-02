# Installs the current application on a Node Image.
FROM node:10.8

# The qq is for silent output in the console
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update -qq \
  && apt-get install -y --no-install-recommends build-essential=11.7 libpq-dev=9.4.21-0+deb8u1 vim=2:7.4.488-7+deb8u3 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Sets the path where the app is going to be installed
ENV NODE_ROOT /usr/app/

# Creates the directory and all the parents (if they don’t exist)
RUN mkdir -p $NODE_ROOT

# Sets the /usr/app as the active directory
WORKDIR $NODE_ROOT

# Copies all the content
COPY . .

# Install all the packages
RUN npm install -g @angular/cli
RUN npm install -f

# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
EXPOSE 4200 49153
