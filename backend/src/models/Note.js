import mongoose from 'mongoose'


//mongoose.schema creates the template for a collection in the database
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true } //created at and updated at
)

//the model is basically the entry point for the collection datebase
const Note = mongoose.model("Note", noteSchema)

export default Note;
