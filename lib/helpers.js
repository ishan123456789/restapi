let helper = {};

helper.validateKeys = (obj = {}) => {
    return Object.keys(obj).filter((i, _, arr) => !obj[i]);
}
module.exports = helper;