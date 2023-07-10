
const user = {
    name: "tar",
    isAdmin: 1
}

switch (true) {
    case !user:
        return console.log("!!! redirect")
    case !!user.isAdmin:
        return console.log("hello admin ", user)
    case !user.isAdmin:
        return console.log("hello user ", user)
    default:
        break
}