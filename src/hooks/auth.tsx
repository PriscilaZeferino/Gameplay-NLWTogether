import React,{
    ReactNode,
    createContext,
    useContext,
    useState
} 
from "react";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type AuthContextData = {
    user: User;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

const [user, setUser] = useState<User>({} as User);


function AuthProvider({children} : AuthProviderProps)
{
    return (
        <AuthContext.Provider value={{
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth()
{
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider, useAuth}