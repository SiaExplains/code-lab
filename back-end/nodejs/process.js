console.table(process.versions);
if (process.versions.v8 < '4') {
    console.log('your nodejs-V8 is out of the date!');
} else {
    console.log(`Congraulate, Your Node-V8 Versions is ${process.versions.v8}`);
}
// change environemt variales:
process.env.MyTestUser = 'siavash';
console.log(process.env.MyTestUser);
