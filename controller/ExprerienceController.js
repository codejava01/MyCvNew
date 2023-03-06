var Exprerience = require('../model/Exprerience');
async function index(req, res) {
    var expreriences = await Exprerience.findById();
    res.json({ massage: 'successful', data: { expreriences } });
}
module.exports = {
    index,
};
