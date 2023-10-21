export class RegisterRequestDTO
{

    public username!:string;

    public  email!:string;

    public  password!:string;
}

export class RegisterResponseDTO
{
    public  id!:string;
    public  username!:string;
    public  email!:string;
}

export class RegisterIdentityErrorResponse
{
    public requestedUser!: RegisterRequestDTO;
   // public IEnumerable<IdentityError> errors { get; set; } = new List<IdentityError>();
}
