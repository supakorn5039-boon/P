exports.auth = async () => {
  try {
    const token = req.headers["authtoken"];
    console.log(token);
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};