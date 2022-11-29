export default function login_validate(values) {
    const errors = {

    }
    if(!values.username){
        errors.username = "Required"
    } else if(values.username.length < 5 || values.username.length > 10 ){
        errors.username = 'username must be greater then 5 and less then 10 characters'
    }else if(values.username.includes(" ")){
        errors.username = "invalid username"
    }

    if(!values.password){
        errors.password = "Required"
    } else if(values.password.length < 8|| values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters"
    } else if(values.password.includes(" ")){
        errors.password = "invalid password"
    }

    return errors
}

export function signup_validate(values) {
    const errors = {

    }
    if(!values.username){
        errors.username = "Required"
    }else if(values.username.includes(" ")){
        errors.username = "invalid username"
    }

    if(!values.password){
        errors.password = "Required"
    } else if(values.password.length < 8|| values.password.length > 20){
        errors.password = "Must be greater then 8 and less then 20 characters"
    } else if(values.password.includes(" ")){
        errors.password = "invalid password"
    }

    return errors
}