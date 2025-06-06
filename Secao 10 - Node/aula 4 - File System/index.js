const fs = require('fs').promises;
const path = require('path');

const readdir = async(rootDir) => {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

const walk = async(files, rootDir) => {
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/\.node_modules/g.test(fileFullPath)) continue;

        //Lista arquivos dentro de diretorios
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }   

        if(
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
        ) continue;

        console.log(file, stats.isDirectory());
    }
}

readdir('C:\\Users\\Donizete\\Desktop\\JS\\CursoJS');