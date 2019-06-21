# DEVELOPER

Run `npm install` to install all the dependencies.  
Run `npm start` to run this project. This will run with the AoT Compiler.  
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
 
To build the development environment, run `npm run dist`.

## Production

To build the production environment, run `npm run prod`. This will run with the AoT Compiler.  
To build the production environment without hashing in the files, run `npm run prod:hashless`. This will give packages without a hash.  
To build the production environment with reduced file size, run `npm run prod:opt` (Takes extra time to build with build optimizer).  
