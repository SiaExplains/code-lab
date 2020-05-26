const fetch = require('node-fetch');

const posts = [
    { title: 'post one', body: 'body of first post' },
    { title: 'post two', body: 'body of second post' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(p => {
            output += `* ${p.title}\r\n`;
        });
        console.log(output);
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let err = false;
            if (err) {
                reject('an error here just happend');
            } else {
                resolve('an item has been pushed to array[]');
            }
        }, 2000);
    });
}

async function demo() {
    let data = await createPost({
        title: 'post three',
        body: 'body of third post'
    });
    console.log(`DATA FROM ASYNC/AWAIT: ${data}`);

    let resultOfFetch = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    let users = await resultOfFetch.json();

    users.map(u => {
        console.log(`NUMBER OF USERS: ${u.name}`);
    });

    getPosts();
}

demo();
