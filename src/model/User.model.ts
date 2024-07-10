class User {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    static emptyUser(){
        return new User("", "")
    }
}

export default User