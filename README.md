# TypeScript Exploration 

A repo for me to store all my learning around TypeScript. <br/>


## Helpful tricks

If you want to auto compile one file on save you can use one of the two following commands

```
tsc <FILE_NAME> --watch
tsc <FILE_NAME> -w
```

This will watch the specified file and, on save, auto compile.<br/><br/>

If you have a larger project with a number of files you can initialize the project
```
tsc --init
```
This will produce a ```tsconfig.json``` and by just running ```tsc``` all .ts files in the directory will compile

Adding a ```!``` to the end of say this code ```const button = document.querySelector('button)!``` tells TS you know that this element exists and not to add an error

## tsconfig.json tips

There are some interesting settings to keep in mind when setting up a TS project
- ```"target": "es5"``` - This will control how the code is output, if you are using things like map() etc, its worth changing to es6+
- ```"outDir": "./"``` - This will specify where the output .js files will go. if we set this to ./dist and have out .ts files in ./src the output files will be stored in dist away from our TS. Also copies across file structure, so if we have another dir in src with .ts files, the same dir will be copies to dist.
- ```"noEmitOnError": true``` - TS by default will always compile, if we set noEmitOnError to true, if there are any errors on any files, no files will be emitted.