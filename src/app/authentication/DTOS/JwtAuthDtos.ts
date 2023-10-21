export class JwtAuthDTO
{
    public  token!:string;
    public  refreshtoken!:string;
    public  tokenexpiresin!:Date;
}

export class JwtRefreshDTO
{

    public token!:string;

    public  refreshtoken!:string;
}
