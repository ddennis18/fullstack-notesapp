export function getAllNotes(req, res){
  res.status(200).end("All Notes please")
}
export function createNote(req, res){
  res.status(200).json({message:'notes created successfully'})
}
export function updateNote(req, res){
  res.status(200).json({message:'note updated successfully'})
}
export function deleteNote(req, res){
  res.status(200).end("deleted")
}