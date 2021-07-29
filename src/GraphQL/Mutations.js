import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION= gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
        lastName
        firstName
        email
        id
        }
    }
`