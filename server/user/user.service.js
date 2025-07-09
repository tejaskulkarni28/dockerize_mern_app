const User = {
  async handleInputs(req, res, next) {
    const { id } = req.body;
    console.log("Function triggered");
    console.log("ID: ", id);
    return { status: 200, message: "OK", id };
  },
};

module.exports = User;
