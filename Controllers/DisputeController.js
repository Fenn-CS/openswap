class DisputeController {

    start(req, res, next) {
        (!req.params.id) ? res.json({ message: 'dispute temporaly impossible, check your connection' }) :
            res.json({ message: 'You joined the dispute' })
        next()
    }
    quit(req, res, next) {
        (!req.params.id) ? res.json({ message: 'You cannot leave unless the end of the dispute' }) :
            res.json({ message: 'You leave the dispute' })
        next()
    }
    send(req, res, next) {
        req.json({
            success: true,
            data: [],
            message: "message successfully send"
        })
    }

    delete(req, res) {
        req.json({
            success: true,
            data: [],
            message: "message successfully send"
        })
    }
};

module.exports = new DisputeController();
