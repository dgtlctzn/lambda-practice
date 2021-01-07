import axios from "axios";

var options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
  },
};

exports.handler = async (event, context) => {
    const {data} = await axios(options);
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
};
