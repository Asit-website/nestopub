const { getChat, getChats, postChat } = require('../controller/chatController');
const auth = require('../middleware/auth');

const router = require('express').Router();

router.get('/getChats', auth, async (req, res) => {
    try {
        const data = await getChats({user: req.user});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

router.get('/getChat/:id', auth, async (req, res) => {
    try {
        const data = await getChat({user: req.user, id: req.params.id});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

router.get('/postChatBroker/:id', auth, async (req, res) => {
    try {
        const data = await postChat({user: req.user, id: req.params.id, ...req.body});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

router.get('/postChatClient/:id', auth, async (req, res) => {
    try {
        const data = await postChat({user: req.user, id: req.params.id, ...req.body});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

module.exports = router;