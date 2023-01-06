const { getChat, getUserChats, postChatBroker, postChatClient } = require('../controller/chatController');
const auth = require('../middleware/auth');

const router = require('express').Router();

router.get('/getChats', auth, async (req, res) => {
    try {
        const data = await getUserChats({user: req.user});
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
        const data = await postChatBroker({user: req.user, id: req.params.id, ...req.body});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

router.get('/postChatClient/:id', auth, async (req, res) => {
    try {
        const data = await postChatClient({user: req.user, id: req.params.id, ...req.body});
        res.json(data);
    } catch (error) {
        res.json({status:false, message:error.message});
    }
});

module.exports = router;