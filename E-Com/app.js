const postDataBase = [
    {
        name: 'Nike Shoes',      
        post: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        desc: 'BUY'
    },
    {
        name: 'Samsung Mobile',       
        post: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'BUY'
    },
    {
        name: 'T-Shirt',       
        post: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'BUY'
    },
    {
        name: 'Jeans',       
        post: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        desc: 'BUY'
    }
]

const users = [
    {
        userName: "Rohit",
        password: 123
    }
]

function userAuth(user, pass) {
    if (user === users[0].userName && pass === users[0].password) {


        const posts = document.getElementById('posts')

        postDataBase.forEach(function (post) {

            posts.innerHTML += `
    <div class="post">
    <div class='user'>
    <h1>${post.name}</h1>
    </div>   
    <img class='postpic' src=${post.post} alt="post">
    <p>${post.desc}</p>
    </div>`
        })

    } else {
        alert('Username and Password are not mateched')
    }
}

const userN = prompt('Enter your Name')
const PassW = Number(prompt('Password'))

console.log(userN, PassW)
userAuth(userN, PassW)