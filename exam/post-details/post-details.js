const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
console.log(postId);

async function loadUserInfo() {
    try {
        let [post, comments] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()),
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json())
        ]);
        let postBlock = document.getElementById('postBlock');
        postBlock.innerHTML = `
            <h1>${post?.title}</h1>
<!--            <p><b>ID:</b> ${post?.id}, <b>user ID:</b>${post?.userId}</p>-->
            <p>${post?.body}</p>
        `;
        let commentsBlock = document.getElementById('commentsBlock');
        comments.forEach(comment => {
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');
            commentBlock.innerHTML = `
                <p class="comment-from"><b>From:</b> ${comment?.email}</p>
                <h2>${comment?.name}</h2>
                <p>${comment?.body}</p>
            `;
            commentsBlock.appendChild(commentBlock);
            console.log(comment);
        })
    } catch (error) {
        console.log('Error:', error);
    }
}

loadUserInfo();
