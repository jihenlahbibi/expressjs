const ladate = (req,res,next)=>{
     const date = new Date();
     const day = date.getDay();
     const hour = date.getHours();

     if (day>5 ||hour<9 || hour>17) {
        res.send("we are closed");
     }
     else{
          next()
     }
}
module.exports = {ladate}