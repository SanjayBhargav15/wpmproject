const index = (req,res)=>{
    res.render('index',{title : 'Restaurant'});
};
module.exports = {
    index
};