class settingController {
    save(req, res, next) {
        res.json({
            success: true,
            data: [],
            message: "settings successfully registered"
        })
    };
}
module.exports = new settingController();
