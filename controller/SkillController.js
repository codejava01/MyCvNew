var Skill = require('../model/skill');
async function index(req, res) {
    var skills = await Skill.findById();
    res.json({ massage: 'successful', data: { skills } });
}
module.exports = {
    index,
};
