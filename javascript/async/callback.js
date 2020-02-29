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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'post three', body: 'body of third post' }, getPosts);
