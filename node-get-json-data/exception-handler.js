var methods = {
    handleError: function (typeError, err) {
    console.error(typeError, err);
    res.send('Something Happen!');
    }
}

module.exports = methods;