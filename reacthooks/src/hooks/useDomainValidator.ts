import { useEffect, useState } from "react";

export function useDomainValidator(){
    let [isValid,setIsValid] = useState(false);
    let [email,setEmail] = useState<string>("");
    let [validationMessage,setValidationMessage] = useState<string>("");

    //Checks if the email is valid
    function validateEmailDomain(){
        var regExEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$");

        if(regExEmail.test(email) &&  email.includes("@aranghat.com"))
        {
            setValidationMessage("");
            setIsValid(true);
        }
        else
        {
            setValidationMessage("Email must contain @aranghat.com domain.");
            setIsValid(false);
        }
    }

    //Validate only if the email changes
    useEffect(()=>{
        validateEmailDomain();
    },[email]);

    //return { IsValid : isValid, ValidationMessage : validationMessage, SetEmail : setEmail}
    return {isValid,validationMessage,setEmail,isEmailAvailable : true};
}