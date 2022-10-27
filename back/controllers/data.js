const Note = require("../models/userdata").UserData;

exports.createNote = async (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    text: req.body.text,
    date: req.body.date,
  });
  try {
    await note.save();
    res.status(201).json({
      message: "Note saved successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
};

exports.getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();
    notes.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

exports.modifyNote = async (req, res, next) => {
  try {
    const note = await Note.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    );
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Deleted!",
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
