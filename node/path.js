// path.basename(path[, ext]) 获取当前文件的文件名，注意，文件的扩展名不传时，获取的是带扩展名的文件名
// path.delimiter  获取当前系统的环境变量分隔符
// path.dirname(path) 获取文件的目录名
// path.extname(path) 获取文件的扩展名
// path.format(pathObject)  与 path.normalize 解析的路径重新序列化
// path.isAbsolute(path)  判断路径是不是绝对路径
// path.join([...paths])  进行路径拼合，这样路径就可以跨平台使用
// path.normalize(path)   将路径正常化
// path.parse(path)  path.parse  <==> path.extname + path.basename + path.dirname
// path.posix
// path.relative(from, to) 相对路径
// path.resolve([...paths]) 绝对路径 可以直接输入 shell 命令进行路径绝对化
// path.sep 获取当前系统的路径分隔符
// path.win32  当前系统类型为 win


const path = require('path');

console.log('path.basename: ',path.basename('aa.txt'));
console.log('path.delimiter: ',path.delimiter);
console.log('path.sep: ',path.sep);
console.log('path.dirname: ',path.dirname('d:/text/aa.txt'));
console.log('path.extname: ',path.extname('aa.txt'));
console.log('path.isAbsolute: ',path.isAbsolute('aa.txt'));
console.log('path.join: ',path.basename(__dirname,'aa.txt'));
console.log('path.normalize: ',path.normalize('aa\\\aaaaaaa////aa'));
console.log('path.parse: ',path.parse('http://localhost:3000/aa.txt'));
console.log('path.format: ',path.format( { root: '',
                                            dir: 'http://localhost:3000',
                                            base: 'aa.txt',
                                            ext: '.txt',
                                            name: 'aa' }));