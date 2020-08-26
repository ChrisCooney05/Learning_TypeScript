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