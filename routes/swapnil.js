app.post('/signup',(req,res)=>{
    req.checkBody('fname','First Name Required').notEmpty();
    req.checkBody('mname','Middle Name Required').notEmpty();
    req.checkBody('lname','Last Name Required').notEmpty();
    req.checkBody('phno','Phone Number Required').notEmpty();
    req.checkBody('education','Education Required').notEmpty();
    req.checkBody('address','address Required').notEmpty();
    req.checkBody('zip','zip code Required').notEmpty();
    req.checkBody('email','Email Required').isEmail();
    req.checkBody('password','Password is Required').notEmpty();
    
    const error=req.validationErrors();

    if(error){
        res.render('register.ejs',{err:error});
    }else{ 

    const hashPassword=bcrypt.hashSync(req.body.password, 10);

    const newUser=new User({
        fname:req.body.fname,
        mname:req.body.mname,
        lname:req.body.lname,
        gender:req.body.selradio,
        education:req.body.education,
        phno:req.body.phno,
        address:req.body.address,
        zip:req.body.zip,        
        email:req.body.email,
        password:hashPassword
    });
    User.find({ename:email},(err,data)=>{
        if(!data){
            newUser.save((err)=>{
                if(!err){            
                    res.redirect('/login');
                }else{
                    console.log(err);
                }
            });

        }
        else{
            res.flash("user al")
        }
    })
    
    }
});
