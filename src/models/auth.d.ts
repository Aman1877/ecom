type SignUpTypes = {
    username?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

type SignInTypes = {
    email:string;
    password:string;
}

type AuthState = {
    userName:string;
    email:string
}

export type{SignUpTypes,SignInTypes,AuthState}