export type ErrorType = 'alert' | 'field';

export const loginNegativeCases = [
    {
        title: 'Wrong username correct password',
        username: 'wronguser',
        password: 'admin123',
        error: 'Invalid credentials',
        type: 'alert' as ErrorType,
    },
    {
        title: 'Wrong password correct username',
        username: 'Admin',
        password: 'wrongpass',
        error: 'Invalid credentials',
        type: 'alert' as ErrorType,
    },
    {
        title: 'empty username',
        username: '',
        password: 'admin123',
        error: 'Required',
        type: 'field' as ErrorType,
    },
    {
        title: 'empty password',
        username: 'Admin',
        password: '',
        error: 'Required',
        type: 'field' as ErrorType,
    },
];