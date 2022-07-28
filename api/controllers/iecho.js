const { response } = require("express");

const iechoGet = async (req, res = response) => {
  let { text } = req.query;
  console.log(text);
  let result = text.split("").reverse().join("");

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  let textAux = removeAccents(text)
    .replace(/ /g, "")
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "");

  let resultAux = removeAccents(result)
    .replace(/ /g, "")
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "");

  if (text) {
    if (resultAux == textAux) {
      // let rta = result + " " + "//PALINDROMO";
      return res.json({response: result,
                       palindromo: 'YES' });
    } 
      return res.json({response: result,
                    palindromo: 'NO'});
    
  } 
    return res.status(404).json({ msg: "no text" });
  
};

module.exports = { iechoGet };
