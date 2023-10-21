import { JwtAuthDTO } from "./JwtAuthDtos";

export class LoginRequestDTO
{

    public username!: string;

    public  password!: string;
}

export class LoginResponseDTO
{
    public  username!: string;
    public  email!:string;
    public roles: Array<string> = new Array<string>();
    public jwt!:JwtAuthDTO;
}

