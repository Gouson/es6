import { url } from './config2'
import slug from 'slug'
import md5 from 'md5'

export default function User(name, email) {
    return {
        name,
        email
    }
}

export function createURL(name) {
    return `${url}/user/${slug(name)}`
}

export function gravatr(email) {
    return `https://www.gravatar.com/avatar/${md5(email)}`
}