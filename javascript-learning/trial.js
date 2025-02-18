class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

}

class DiscordUser extends User {
    #userName;

    constructor(userName, name) {
        super(name);
        this.#userName = userName;
    }

    getUserAndName() {
        return this.#userName + " " + super.getName();
    }
}

// Usage:
let user = new DiscordUser("curiousgeorge_.s", "Youssef Labidi");
console.log(user.getUserAndName())