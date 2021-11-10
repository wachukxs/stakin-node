module.exports = {
    async signUpUser (req, res) {
        console.log(req.body);

        res.send('Done')
    },

    async logInUser (req, res) {
        console.log('req.body in logInUser', req.body);

        res.json({ message: 'Done' })
    },

    async getServiceReport(req, res) {

    }
}