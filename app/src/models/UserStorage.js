"use strict";

const { reduce } = require("async");


class UserStorage{
    static #users = {
        id: ["test", "test2", "test3", "youngjoo9992"],
        psword: ["testpw", "test2pw", "test3pw", "1234"],
        name: ["테스트", "테스트2", "테스트3", "윤영주"],
    }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo
    }

}

module.exports = UserStorage;