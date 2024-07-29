const Client = require('../models/client');

exports.createClient = async (req, res) => {
    try {
        const newClient = new Client(req.body);
        await newClient.save();
        res.status(201).send(newClient);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).send(clients);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).send();
        }
        res.send(client);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!client) {
            return res.status(404).send();
        }
        res.send(client);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).send();
        }
        res.send(client);
    } catch (error) {
        res.status(500).send(error);
    }
};
