# Pirals

Building Microfrontends with Pirals - https://piral.io/
[Piral Docs](https://docs.piral.io/guidelines/tutorials/01-introduction)
[Piral Github Repo](https://github.com/smapiot/piral)


## What is Piral
Piral is an open-source framework for fully flexible modular applications. It is built on top of React, but has lots of plugins available for other frameworks and technologies.

Piral is a framework for creating ultra-scalable web apps using micro-frontends. Among many things, it features:

- An integrated micro-frontends discovery mechanism
- An extensive developer experience that’s end-to-end with everything you’d need
- Loosely coupled components with cross-framework support

A Piral application consists of three parts:

- The app shell. This can be as simple as an HTML file containing a reference to the micro-frontend discovery service, known as a feed
- The feed of micro-frontends (could be also a static JSON, but usually you’d want something more powerful)
- The different modules (micro-frontends), referred to as pilets

image:
https://blog.logrocket.com/wp-content/uploads/2022/08/module-setup-e1659636377829.png


### Building blocks and terminology

- The Pilet:
These are the individual feature modules, also known as microfrontends. They each include their own dependencies and assets, and are completely independent of each other.
Pilets can define how the integration of their components will happen. 
Maybe we need a dedicated page, and also register a button somewhere else that will link to the page? It is all possible.
- The feed service: 
Pilets are usually published to a feed service (e.g. a REST API). Piral provides its own feed service over at piral.cloud.
- The Piral Instance (app shell):
This is the place where all feature modules will be integrated. The piral instance will pull all registered pilets from the feed service, and put them where they need to go as defined by the pilets themselves. The app shell also is the place to put your basic layout: navbars, headers, footers, and shared components.




# Set Up

Install the Piral CLI globally by running:
```
npm install piral-cli -g
```

To create a Piral instance (app shell) called netflix-piral, let's run
```
piral new --target netflix-piral

```

We can run the newly created Piral instance with the following command:
```
piral debug

# or, if you want to open the browser automatically:
piral debug --open

```



### Build

https://kaninkearpimy.medium.com/microfrontend-build-simple-e-commerce-with-piral-framework-3fb111437cf0


```
npx piral build

pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet

npm init pilet

pilet debug

```

##
##

# Data Sharing
- React way of passing props
- 

##
##


## Piral Samples
- https://github.com/piral-samples
- https://github.com/DanteDeRuwe/netflix-piral
- https://github.com/piral-samples/piral-shareddata-sample

## Links
- https://docs.piral.io/guidelines/tutorials/01-introduction
- [My experiences creating a Netflix clone using microfrontends
] https://dev.to/dantederuwe/my-experiences-creating-a-netflix-clone-using-microfrontends-1n46
- https://blog.logrocket.com/creating-micro-frontends-piral/
- https://kaninkearpimy.medium.com/microfrontend-build-simple-e-commerce-with-piral-framework-3fb111437cf0



## Videos
- https://www.youtube.com/watch?v=jHmzE1j64zo&list=PLQ9i8GS-LNXkHE8fbkU4Qwgbak4Rwjbg-&index=1



# APP SHELL

- https://multi-programming.com/blog/what-an-app-shell-is-about-and-how-your-project-might-benefit-from-it

- https://love2dev.com/blog/app-shell/

- https://medium.com/google-developers/instant-loading-web-apps-with-an-application-shell-architecture-7c0c2f10c73

- https://medium.com/jahia-techblog/create-a-modular-ui-with-a-webpack-app-shell-396fa69c9851

- https://www.trendmicro.com/en_us/devops/21/h/micro-frontend-guide-technical-integrations.html

- https://livebook.manning.com/book/micro-frontends-in-action/chapter-7/v-4/16





## Errors


### Error
```
Error: Cannot find module 'node:process'
Require stack:
- /Users/saratchandrae/.npm/_npx/58555/lib/node_modules/create-piral-instance/node_modules/piral-cli/lib/external/index.js
- /Users/saratchandrae/.npm/_npx/58555/lib/node_modules/create-piral-instance/node_modules/piral-cli/lib/bundler.js
- /Users/saratchandrae/.npm/_npx/58555/lib/node_modules/create-piral-instance/node_modules/piral-cli/lib/apps/debug-piral.js
- /Users/saratchandrae/.npm/_npx/58555/lib/node_modules/create-piral-instance/node_modules/piral-cli/lib/apps/index.js

```

Solution :
upgrade to node 16