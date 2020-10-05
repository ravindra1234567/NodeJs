var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host : 'smtp.gmail.com',
    port : '587',
    secure : false,
    requireTLC:true,
    auth:{
        user : 'ravindrakumar18c3090@gmail.com',
        pass : 'Ravindra@12345',
    }
});
var mailOption = {
    from : 'ravindrakumar18c3090@gmail.com',
    to : 'ravindrakushwahanw@gmail.com',
    subject : 'Dear Friend !',
    text : 'I am ravindra kumar kushwaha . what are you doing now ?,'
}
transport.sendMail(mailOption,function(error,info){
    if(error){
        console.warn(error);
    }else{
        console.warn("Email Sent",info.response);
    }
})