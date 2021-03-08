import React, { useCallback, useEffect, useState } from 'react'

interface Props {
    name: string,
}

interface User {
    id: number,
    name: string,
    like: boolean,
}
const remoteUsers: User[] = [
    { id: 1, name: 'Marcos', like: true},
    { id: 2, name: 'Joel', like: false }
];

const getUsers = (): Promise<User[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('getUsers: ', remoteUsers)
            resolve(remoteUsers);
        }, 500);
    })
}

const addUser = (name: string): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const user: User = { id: remoteUsers.length + 1, name, like: false };
            remoteUsers.push(user);
            console.log('addUser')
            resolve()
        }, 500);
    })
}

const Page: React.FC<Props> = ({ children, name }) => {
    const [value, setValue] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);


    const handleChangeValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addUser(value).then(() => {
            getUsers().then(result => {
                setUsers(result);
                setValue('')
            })
        });
    }, [value])

    useEffect(() => {
        getUsers().then(result => {
            setUsers(result);
        })
    }, [])

    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeValue}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {users.map((u) => (<li key={u.id}>{u.name}<input type="checkbox" value={u.id} checked={u.like} /></li>))}
        </ul>
    </div>
    );
}

export default Page