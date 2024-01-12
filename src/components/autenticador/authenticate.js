function Authenticate(user, password) {
    if (user === "adm" && password === "adm") {
       localStorage.setItem("authenticated", true);
       return true;
    }
    return false;
   }
   export default Authenticate