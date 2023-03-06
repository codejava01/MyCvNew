var Education = require('../model/Education');
async function index(req, res) {
    var education = await Education.findById();
    res.json({ massage: 'successful', data: { education } });
}
module.exports = {
    index,
};
