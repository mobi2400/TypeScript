const user={
    name:"mobi",
    email:"mobi2400@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

createUser({name:"mobi",isPaid:true})

function createCourse():{}{ // return object
    return {}
}
//creating the dataTypes
type User = {
    name:string,
    email:string,
    isActive:boolean
}

function createUser1(user:User) :User{
    return {name:"",email:"",isActive:false}
}


export{}