const express = require('express');
const EventsModel = require('../models/eventsModel');

const getEvents = async (req, res)=>{
    const events = await EventsModel.find()
    res.json(events);
}

const addEvent = async(req, res)=>{
    const event = req.body;
    const newEvent = new EventsModel(event);

    try{
        await newEvent.save();
        res.status(201).json(newEvent); 
    }catch(error){
        res.status(400).json(error.message);
    }
}

module.exports = {
    getEvents,
    addEvent,
}