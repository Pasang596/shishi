const express= require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const staff = require("../models/staffModel");
const bcryptjs = require("bcryptjs");



router.post("/staff/insert",(req,res)=>{

    const Email = req.body.Email;
    staff.findOne({Email: Email})
    .then((staff_data)=>{
        if(staff_data!=null){
            res.json({msg:"Email already exists"});
            return;
        }
        const Firstname = req.body.Firstname;
        const Lastname = req.body.Lastname;
        const Username = req.body.Username;
        
        const Password = req.body.Password;
        const Age = req.body.Age;
        const Date = req.body.Date;
        const PhoneNumber = req.body.PhoneNumber;
        const Location = req.body.Location;
        

        bcryptjs.hash(Password, 10, (e, hashed_pw)=>{

            const data = new staff({
                Firstname: Firstname,
                Lastname: Lastname,
                Username: Username,
                Email: Email,
                Password: hashed_pw,
                Age: Age,
                Date: Date,
                PhoneNumber: PhoneNumber,
                Location: Location
            })
            data.save()
            .then(()=>{
                res.json({msg: "register"})
            })
            .catch((e)=>{
                res.json({msg:"error"})
            });
        

        })
    
        
    
   
      
        
    })
    .catch()

})

//router for updating own profile
 router.put("/staff/update",auth.staffGuard,(req,res)=>{
     const Firstname = req.body.Firstname;
     const Lastname = req.body.Lastname;

     res.send("updated");
 })


module.exports = router