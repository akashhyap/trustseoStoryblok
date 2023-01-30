const axios = require('axios');

module.exports = async (req, res) => {
  const { data } = await axios.get(`https://us21.api.mailchimp.com/3.0/lists/${process.env.LISTIDKEY}/members`, {
    headers: {
      'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`
    }
  });
  console.log(res.json(data));
  // res.json(data);
};
