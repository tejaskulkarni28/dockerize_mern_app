import axios from "axios";
const user = {
  async sendText({ id }) {
    try {
      await axios.post("http://localhost:32/user/sendtext", { id });
    } catch (error) {
      console.log("API error: ", error);
    }
  },
};

// module.exports = user;

export default user;
