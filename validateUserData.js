const validateUserData = (req, res, next) => {
  
    const { firstName, lastName, phoneNumber, email, password } = req.body;

    console.log(req.body);

      if (!/^[A-Z][a-z]*$/.test(firstName) || !/^[A-Z][a-z]*$/.test(lastName)) {
        return next(new Error("First name and last name must start with an uppercase letter and contain only letters."));
    }


    // !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[+/`*@#$%^&*]).*$/.test(password)) {
        return next(
            new Error("Password must contain one small character, min one UpperCase char, 1 number and one special character")
        )
    }
    
    if (typeof phoneNumber !== "string" || phoneNumber.length < 10) {
        return next(
            new Error("Mobile number should be 10 digits only")
        )
    }

   if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return next(
        new Error("Enter a valid Email address")
    );
}

    next();

}


const errorHandler = (err, req, res, next) => {
    console.log(err);
    console.log(err.stack);
        res.status(400).json({error: err.message});
} 

export {errorHandler, validateUserData};