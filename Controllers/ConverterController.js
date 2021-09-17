module.exports = {
    index: (req, res) => {
        res.json({ dataConvert: [] })
    },
    convert: (req, res) => {
        res.json({ success: true, data: [], message: "convertion successfully done" });
    }
};
