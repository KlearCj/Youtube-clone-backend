import {object, string, TypeOf} from 'zod'

export const registerUserSchema={
    body: object({
        username: string({
            required_error: 'username is required'
        }),
        email: string({
            required_error: 'email is required'
        }).email('Must be a valid email'),
        password: string({
            required_error: 'password is required'
        }).min(6, 'Password must be ar leats 6 characters long').max(20,'Password should not be longer than 20 characters'),
        confirmPass: string({
            required_error: 'confirm password'
        })
    }).refine((data)=> data.password === data.confirmPass, {
        message: 'Passwords do not match',
        path: ['confirmPass']
    })
}

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>