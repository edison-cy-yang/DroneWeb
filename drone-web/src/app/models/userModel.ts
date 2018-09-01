export class UserModel {

    uuid: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    imgUrl: string;
    userAbout: string;
    userHobbies: string;

    constructor(
        uuid: string,
        userName: string,
        firstName: string,
        lastName: string,
        userAbout: string,
        userHobbies: string,
        imgUrl?: string) {
        this.uuid = uuid;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userAbout = userAbout;
        this.userHobbies = userHobbies;
        this.imgUrl = imgUrl || '//placehold.it/150';
    }
}
