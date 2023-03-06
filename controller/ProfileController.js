var Profile = require('../model/profile');
async function index(req, res) {
    var profile = await Profile.findById();
    res.json({ massage: 'successful', data: { profile } });
}
module.exports = {
    index,
};
