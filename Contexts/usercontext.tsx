import { createContext, useContext, ReactNode, useState } from "react";
import APIcall from 'utility/APIcall'
import Random from 'utility/Randomizer'
import Regex from 'utility/MasterRegex'

type userContextType = {
    userName: string;
    password: string;
    email: string;
    age: number;
    strains: string|number[];

    // * 
    quickcheck: () => void;
};

const userDefaults: userContextType = {  
    userName: 'test',
    password: 'password',
    email: 'me@memail.com',
    age: 30,
    strains: [],

    // *
    quickcheck: () => {}
};

const UserContext = createContext<userContextType>(userDefaults);

export function useUser() {
    return useContext(UserContext);
}

type Props = {
    children: ReactNode;
};

export function GameProvider({ children }: Props) {
    const [userName, setUserName] = useState<string>('test');
    const [password, setPassword] = useState<string>('mypassword');
    const [email, setEmail] = useState<string>('me@memail.com');
    const [age, setAge] = useState<number>(30);
    const [strains, setStrains] = useState<string|number[]>([]);
    
    const quickcheck = () => {
        setUserName('nice')
    }

    const value = {
        userName,
        password, 
        email,
        age,
        strains,
        quickcheck
    };


    return (
        <>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </>
    );
}



 