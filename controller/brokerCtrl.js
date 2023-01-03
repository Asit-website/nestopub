const Users = require("../models/userModel");
const ScheduleVisit = require('../models/scheduleVisit');

class APIfeature {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    pagination() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 4;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}
const brokerCtrl = {
    editBroker: async (req, res) => {
        try {
            const { firmName, authorizedName, city, mobile, individualName, city1, mobile1,date1, date2, images } = req.body;

            let updateObj1 = {firmName, authorizedName, city, mobile, individualName, city1, mobile1,date1,date2}
            if(images){
                updateObj1.images = images;
            }
            await Users.findOneAndUpdate({ _id: req.params.id },updateObj1);

            res.json({ msg: "update profile successfully" });

        }

        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteBroker: async (req, res) => {
        try {
            await Users.findByIdAndDelete({ _id: req.params.id });
            res.json({ msg: "Delete Account Successfully" });
        }

        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    getBroker: async (req, res) => {
        try {
            const features = new APIfeature(Users.find().where({ role: 0 }), req.query)
                .pagination();
            const broker = await features.query;
            res.json({
                status: "success",
                result: broker.length,
                broker: broker,
            });
        }

        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    getScheduledClients: async (req, res) => {
        try {
            // console.log(req.user);
            const data = await ScheduleVisit.find({ user: req.user._id });
            res.json({
                status: "success",
                data,
            });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    postScheduledClients: async (req, res) => {
        try {
            let { client, date } = req.body;
            if (!client || !date) {
                return res.status(400).json({ msg: "Plz choose a client and date" });
            }
            if (!client) {
                return res.status(400).json({ msg: "plz Choose a client" });
            }
            if (!date) {
                return res.status(400).json({ msg: "plz choose a date" });
            }
            const newVisit = new ScheduleVisit({
                user: req.user._id,
                client,
                date
            });
            const data = await newVisit.save();
            return res.json({
                msg: "Meeting scheduled successfully",
                status: "success",
                data
            });
        } catch (error) {
            return res.status(500).json({ status: false, msg: error.message });
        }
    },



    deleteSchedule: async (req, res) => {
        try {
            await ScheduleVisit.findOneAndDelete(req.params.id);
            res.json({ status: "success", msg: "delete successfully" });
        }

        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    editSchedule: async (req, res) => {
        try {
            const { client, date } = req.body;
            let updateObj = { client, date };
            console.log(updateObj);
            console.log(req.params.id);
            let data = await ScheduleVisit.findOneAndUpdate({ _id: req.params.id }, { $set:updateObj }, {new:true});
            res.json({ status: "success", msg: "schedule Update Successfully", data });
        }

        catch (error) {
            return res.status(500).json({ status: false, msg: error.message });
        }
    }
};

module.exports = brokerCtrl;
