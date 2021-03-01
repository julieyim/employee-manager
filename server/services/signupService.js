/* 
  signup service
*/
const fileService = require('./fileService')
 
// common js module  import === require
// export import es modules  Browser...
// exports or module.exports  requre commonjs  NODE (BUNDLER RUN BROWSER)
exports.authenticate = (credential)=>{
 
    const {name, email, password} = {...credential}
    const users = fileService.getFileContents('../data/users.json');
    // flush the authentication
   
 const authUser =  users.reduce((authObj, user)=>{
    
    // check if fields are empty

    if (name !== ""){
        authObj.validName = true;
    }

    if (email !== ""){
        authObj.validEmail = true;
    }

    if (password !== ""){
        authObj.validPassword = true;
    }
         
    return authObj

   }, {validName:false, validEmail:false, validPassword:false, user:null})

   const auth0 = authUser.user ? {user:authUser.user}: formatErrors(authUser);
   return auth0
}
 
const formatErrors = function(user){
  let nameWarning = ""
  let passwordWarning = ""
  let emailWarning = ""

  if(user.validName === false){nameWarning= `please enter a name`}
  if(user.validPassword === false){passwordWarning= `please enter a password`}
  if(user.validEmail === false){ emailWarning= `please enter a valid email`}

  return {user:null, nameWarning, emailWarning, passwordWarning}
}
