type UserRole = "guest" | "member" | "admin"

type User = {
    id: number,
    username: string,
    role: UserRole,
}

type UserUpdate = {
    id?:  number,
    username?: string,
    role: "guest" | "member" | "admin"
}

const users: User[] = [
    {id: 1, username: "bob", role: "admin"},
    {id: 2, username: "jill", role: "member"},
    {id: 3, username: "joe", role: "guest"},
];

function fetchUserDetails(username: string): User {
    const user= users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

function updateUser(id: number, updates: any){
    const foundUser = users.find(user => user.id === id)
    if (!foundUser){
        console.error("User not found")
        return
    }

    Object.assign(foundUser, updates)
}

updateUser(1, { username: "bobby"});
updateUser(3, { role: "admin"});

console.log(users)