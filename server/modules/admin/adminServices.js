const adminCheck = async (req) => {
    try{
        console.log("in admin route");
        const admin = req.admin
        if(!admin) {
            return 1
        }
        return req.admin
    } catch(e) {
        console.log(e);
    }
}

module.exports = {adminCheck}