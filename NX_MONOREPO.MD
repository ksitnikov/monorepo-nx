nx monorepo

## Resources

https://itnext.io/monorepo-pains-9064db3b9882
https://nx.dev/angular/guides/monorepo-affected


## initial repo
 - npm init nx-workspace {{myworkspace}} --> running this will guide through the creation of a new repository
 
## Capabilities (lets nx to use frameworks. Can be setted initialy by new repo init)
 - `npm install --save-dev @nrwl/angular` # Adds Angular capabilities
 - `npm install --save-dev @nrwl/web` # Adds Web capabilities
 - `npm install --save-dev @nrwl/react` # Adds React capabilities
 - `npm install --save-dev @nrwl/node` # Adds Node capabilities
 - `npm install --save-dev @nrwl/express` # Adds Express capabilities
 - `npm install --save-dev @nrwl/nest` # Adds Nest capabilities
 - `npm install --save-dev @nrwl/next` # Adds Next.js capabilities
 
 - `ng add @nrwl/angular --defaults`
 
## new project application
 - `ng g @nrwl/angular:application myapp`		--> Creates new application "myapp"
 
## new project library
 - `ng g @nrwl/angular:lib ui`				--> Creates new library "ui"
 
## new component to project
 - `ng g component todos --project=ui --export`		--> Creates a component inside "ui" project and export it

## build
 - `npm run nx affected:build`  		--> builds only the affected projects
 
 #### Parallel building of projects
 >  - `nx affected:build --parallel`
 >  - `nx affected:build --parallel --maxParallel=5`


## dep-graph
 - `npm run nx affected:dep-graph`	--> shows affected projects, by default it will compare with the master branch
 - 
