
const firebaseConfig = {
    apiKey: "AIzaSyBIT4O8jKDMZOwLO5VSeQ-D7iFW9PH9fCQ",
    authDomain: "database-on-firebase.firebaseapp.com",
    databaseURL: "https://database-on-firebase-default-rtdb.firebaseio.com",
    projectId: "database-on-firebase",
    storageBucket: "database-on-firebase.appspot.com",
    messagingSenderId: "1096289321052",
    appId: "1:1096289321052:web:f3316dbd7dd97b9e31e699"
};
firebase.initializeApp(firebaseConfig);
  
  
const auth = firebase.auth()
const database = firebase.database()
  
function registerData() {
      
    emailData = document.querySelector("#emailRegister").value
    passwordData = document.querySelector("#passwoardRegister").value
    firstNameData = document.querySelector("#firstNameRegister").value
    lastNameData = document.querySelector("#lastNameRegister").value

    if (firstNameData === ''|| lastNameData === ''){
        return
    }
      
    auth.createUserWithEmailAndPassword(emailData, passwordData)
    .then(function(){

        var user = auth.currentUser
        var database_ref = database.ref()
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).
            toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} 
            ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().
            toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

        var user_data = {
            email : emailData,
            FirstName : firstNameData,
            LastName : lastNameData,
            last_login : formattedDate
        }
        
        database_ref.child('users/' + user.uid).set(user_data)
        eraseContent()
        alert('User Created')
    })
    .catch(function(error) {
        if (error.code === ('auth/email-already-in-use') ) {
            mailAlreadyUsed.style.display = 'block'
            emailRegister.style.border = '1px solid red'
        }
    })
     
}
  
  
function loginData(){
    email = emailLogin.value
    password = passwoardLogin.value
    toManyRequests.style.display = 'none'
    incorrectEmail.style.display = 'none'
    incorrectPassword.style.display = 'none'

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){

        var user = auth.currentUser
        var database_ref = database.ref()
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).
            toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} 
            ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().
            toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
      
        var user_data = {
           
            last_login :  formattedDate
        }
      
        database_ref.child('users/' + user.uid).update(user_data)
        
        
        alert('User Logged In ')
        eraseContent()
        
    })
    .catch(function(error) {

        console.log(error.code)
        if (error.code === ('auth/user-not-found')) {
            incorrectEmail.style.display = 'block'
            emailLogin.style.border = '1px solid red'
        }
        if (error.code === ('auth/wrong-password')) {
            incorrectPassword.style.display = 'block'
            passwoardLogin.style.border = '1px solid red'
        }
        if (error.code === ('auth/too-many-requests')) {
            toManyRequests.style.display = 'block'
        }
    })
   
}
  

function validate_password(){
    passwordData = document.querySelector("#passwoardRegister").value

    if (passwordData.length < 6){
        return false
    }else{
        return true
    }

    
}
  
