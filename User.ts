class User{
    protected name: string;
    protected email: string;
    public role: number;
    constructor(name: string, email: string, role: number){
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfol(){
        return `${this.name}, ${this.email}, ${this.role}`;
    }
    isAdmin(){
        if (this.role==1){
            return "là admin";
        }else{
            return "là người dùng bình thường";
        }
    }
}

let user = new User('nguyen A', 'nguyena@gmail.com',1);
console.log(user.getInfol());
console.log(user.isAdmin());