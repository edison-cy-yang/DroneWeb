
module.exports = (app) => {
    app.post('/drones/new', (req, res) => {
        res.send("post request successful");
    });
};