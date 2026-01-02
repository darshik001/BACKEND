const StudentModel = require('../model/student.model');


exports.deshbord = async (req, res) => {

    let students = await StudentModel.find()
    return res.render("index", { students })
}


exports.addstudentpage = (req, res) => {
    return res.render('addstudent')
}


exports.addstudent =  async (req, res) => {
    try {

        await StudentModel.create(req.body)
    } catch (error) {
        console.log(error.errmsg)
    }
    res.redirect('/')
}


exports.deletestudent =  async (req, res) => {
    let id = req.params.id
    await StudentModel.findByIdAndDelete(id)
    return res.redirect('/')

}


exports.editstudent =  async (req, res) => {
    let id = req.params.id
    let student = await StudentModel.findById(id)
    return res.render('editstudent', { student })
}


exports.updatestudent = async (req, res) => {
    let id = req.params.id
    await StudentModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.redirect('/')
}