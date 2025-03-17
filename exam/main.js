async function loadData() {
    try {
        let users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());
                let userList = document.getElementById('userList');
                users.forEach(user => {
                    // console.log(user);
                    let userBlock = document.createElement('div');
                    userBlock.classList.add('user-block');
                    userBlock.innerHTML = `
                        <div class="user-photo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
                            </svg>
                        </div>
                        <div class="user-info">
                            <p><b>ID:</b> ${user?.id}</p>
                            <p><b>Name:</b> ${user?.name}</p>
                            <p><b>Username:</b> ${user?.username}</p>
                            <p><b>Email:</b> ${user?.email}</p>
                            <p><b>Phone:</b> ${user?.phone}</p>
                        </div>
                        <div class="more-info">
                            <a href="user-details/user-details.html?userId=${user?.id}">More details</a>
                        </div> 
                    `;
                    userList.appendChild(userBlock);
                });

    } catch (error) {
        console.log('Error: ', error);
    }
}

loadData();
