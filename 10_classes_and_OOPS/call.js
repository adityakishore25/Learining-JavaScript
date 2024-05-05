function SetUsername(username) {  // uses 'this' provided by createUser
    // complex DB calls
    this.username = username
    console.log('called');
}
function createUser(username, email, password) {
    SetUsername(username)  // function SetUsername is getting called but its reference is begin is passed
    SetUsername.call(this, username)  
    this.email = email
    this.password = password
}

const chai = new createUser('Aditya', 'kishore@gmail.com', '2321')
console.log(chai);