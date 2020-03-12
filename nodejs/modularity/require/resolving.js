// how to check is a specific module exist or not!

try {
    let Isexists = require.resolve('lodash1');
    console.log(Isexists);
} catch (err) {
    console.log('module not found');
}
