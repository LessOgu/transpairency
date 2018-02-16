import {user} from '../models/user';

const userList: user[] = [
    {
        key: 'somerandomsequenceofletters',
        email: 'example@example.com',
        password: 'apassword'
    },
    {
        key: 'anotherrandomsequenceofletters',
        email: 'email@email.com',
        password: 'anotherpassword'
    },
    {
        key: 'thisrandomsequenceofletters',
        email: 'account@account.com',
        password: 'thispassword'
    }
]

export const USER_LIST = userList;