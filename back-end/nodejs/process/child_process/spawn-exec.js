/*
    spawn (has defualt shell no need to use shell) / streaming
    exec (it uses shell => security issue!) + Buffering
*/
const { exec, spawn } = require('child_process');
exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});

// Script with spaces in the filename:
const bat = spawn('"my script.cmd"', ['a', 'b'], { shell: true });
// or:
exec('"my script.cmd" a b', (err, stdout, stderr) => {
    // ...
});
