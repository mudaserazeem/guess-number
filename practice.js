
// create a signup Page


let user = []
let logedinUser = null



const signUp = (userName, password) => {
    const isUserExist = user.some(user => user.userName == userName);

    if (isUserExist) return "userNmae already exist"

    const newUser = {
        userName,
        password,
        posts: [],
        following: [],
        followers: []
    }
    user.push(newUser)
    return "signUp successfully";
}

console.log(signUp('mudaser_azeem', 'Jaskani@789'))

console.log(signUp('muasir', 'Jaskani@700'))
console.log(signUp('ali', 'Jaskani@700'))
console.log(signUp('safdar', 'Jaskani@700'))





// create a login


const login = (userName, password) => {

    const findUser = user.find((user) => {
        return user.userName == userName && user.password == password
    })
    logedinUser = findUser
    if (findUser) {

        return 'Login Successfully'
    } else {
        return 'inviled username or password'
    }

}
// console.log(login('mudaser_azeem', 'Jaskani@789'))
console.log(login('muasir', 'Jaskani@700'))


// search username 

const searchUser = (name) => {

    const filterUser = user.filter(user => user.userName.includes(name))

    console.log(filterUser)

}
searchUser('mudaser_azeem')

// deleteUser

const deleteUser = (name) => {
    const filterUser = user.filter(user => user.userName != name)

    return user = filterUser


}
// deleteUser('mudaser_azeem')




// create Post
let createPost = (img, title) => {

    if (!logedinUser) return 'please login first'



    const lastId = [...logedinUser?.posts].pop()?.id || 0

    const posts = {
        id: lastId + 1,
        img,
        title
    };

    logedinUser.posts.push(posts)

    const newUser = user.map((u) => {
        if (u.userName === logedinUser.userName) {
            return logedinUser;
        } else {
            return u;
        }
    });

    console.log(newUser)
    user = newUser

}

createPost('https://www.pexels.com/photo/black-elephant-near-trees-982021/', 'animal in a forst')
createPost('https://www.pexels.com/photo/black-elephant-near-trees-982021/', 'animal in a forst')
createPost('https://www.pexels.com/photo/black-elephant-near-trees-982021/', 'animal in a forst')


console.log(user)

const deletePost = (id) => {

    const newPost = logedinUser.posts.filter((post) => {
        return post.id !== id
    })

    logedinUser.posts = newPost
}

deletePost(2)


// console.log(logedinUser.posts)


// Array to store users


// Follow function
const followUser = (followerName, followeeName) => {
    const getUser = (name) => user.find(u => u.userName === name);
    const follower = getUser(followerName);  // user who wants to follow
    const followee = getUser(followeeName);  // user to be followed
    // check if users exist
    if (!follower || !followee) return "User not found";
    // prevent self-follow
    if (followerName === followeeName) return "You can't follow yourself";
    // already followed
    if (follower.following.includes(followeeName)) return "Already following";

    // Add to following and followers list
    follower.following.push(followeeName);
    followee.followers.push(followerName);
    return `${followerName} followed ${followeeName}`;
};


console.log(followUser("mudaser_azeem", "ali"));


console.log(followUser("muasir", "ali"));

console.log(followUser("safdar", "ali"));


console.log(followUser("ali", "ali"));



