const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

async function loadUserInfo() {
    try {
        let user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(value => value.json());
        console.log(user);
        let userInfoBlock = document.getElementById('userInfo');
        userInfoBlock.innerHTML = `
            <div class="user-photo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                </svg>
            </div>
            <h1>${user?.name} - ${user?.id}</h1>
            <p><b>Username:</b> ${user?.username}</p>
            <p><b>Email:</b> ${user?.email}</p>
            <p><b>Phone:</b> ${user?.phone}</p>
            <p><b>Website:</b> ${user?.website}</p>
            <p><b>Address:</b> ${user?.address?.suite}, ${user?.address?.street}, ${user?.address?.city}, ${user?.address?.zipcode}</p>
            <p><b>Company:</b> ${user?.company?.name}</p>
            <div class="btn-block-more-posts">
                <button onclick="loadPostsByUser()" id="btnLoadPosts">Posts of current user</button>
            </div>
        `;
    } catch (error) {
        console.log('Error:', error);
    }
}

async function loadPostsByUser() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    try {
        let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
        btnLoadPosts.classList.toggle('display-none');
        let postsBlock = document.getElementById('postsBlock');
        posts.forEach(post => {
            let postBlock = document.createElement('div');
            postBlock.classList.add('post-block');
            postBlock.innerHTML = `
                <h2>${post?.title}</h2>
                <p><a href="../post-details/post-details.html?postId=${post?.id}">Details</a></p>
            `;
            console.log(post);

            postsBlock.appendChild(postBlock);
        })
    } catch (error) {
        console.log('Error:', error);
    }
}

loadUserInfo();
