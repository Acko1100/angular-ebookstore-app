import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string;
    date: Date;
    address?: string;
}


@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "aleksandar.radivojevic.201@singimail.rs",
            password: "12345678",
            date: new Date("2023-05-04 16:56")
        },
        {
            id: 2,
            email: "nemanja.milutinovic.20@singimail.rs",
            password: "123456789",
            date: new Date("2023-05-04 16:57")
        },
        {
            id: 3,
            email: "danilo.radivojevic.20@singimail.rs",
            password: "1234567890",
            date: new Date("2023-05-04 16:56")
        }
    ];

    //korisnicko ime / email
    getUserName(user: User): string {
        return user.email;
    }

    //id korisnika
    getUserById(id: number): User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id) {
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    //da li je mejl
    getUser(userEmail: string): User {
        //return UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    //da li je lozinka ispravna 
    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    //registruj korisnika
    registerUser(email: string, password: string, date: Date): User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id
            }
        })
        var id = ++maxId;
        var user: User = {
            id,
            email,
            password,
            date
        }
        UserService.dummyUserList.push(user);

        this.currentUser = user;

        console.log(user);
        return user;
    }
}

