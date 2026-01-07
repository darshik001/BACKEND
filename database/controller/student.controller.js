const StudentModel = require('../model/student.model');
const { formatdate, reformatdate } = require('../services/formatdate');
const path = require('path')
const fs = require('fs');

exports.deshbord = async (req, res) => {

    let students = await StudentModel.find()
    return res.render("index", { students })
}


exports.addstudentpage = (req, res) => {
    return res.render('addstudent')
}


exports.addstudent = async (req, res) => {
    try {

        let imgpath = "";
        if (req.file) {
            imgpath = `/uploads/${req.file.filename}`
        }
        await StudentModel.create({
            ...req.body,
            profileImage: imgpath
        })
        res.redirect('/')

    } catch (error) {
        console.error('Add student error:', error.errmsg)
        res.redirect('/')
    }
}


exports.deletestudent = async (req, res) => {
    let id = req.params.id
    let student = await StudentModel.findById(id)
    console.log(student)

    if (!student) {
        console.log("Student Not FOund")
        res.redirect('/')
    }
    if (student.profileImage != "") {
        try {
            let imagepath = path.join(__dirname, "..", student.profileImage)
            // console.log("image Path:", imagepath);
            await fs.unlinkSync(imagepath)
        } catch (error) {
            console.log("Fill Missing:", error.message)
        }
    }
    await StudentModel.findByIdAndDelete(id)
    return res.redirect('/')

}


exports.editstudent = async (req, res) => {
    let id = req.params.id
    let student = await StudentModel.findById(id)

    student.dob = reformatdate(student.dob)
    student.date = reformatdate(student.date)
    // console.log(student)
    return res.render('editstudent', { student })
}


exports.updatestudent = async (req, res) => {
    let id = req.params.id
    let dob = req.body.dob;
    let date = req.body.date;

    let student =await StudentModel.findById(id)
    let imageurl = student.profileImage
 
    if (req.file) {
        if (student.profileImage !== "") {
            let imgpath = path.join(__dirname, "..", imageurl)
            await fs.unlinkSync(imgpath)
        } 
            imageurl = `/uploads/${req.file.filename}`
        
    }

    await StudentModel.findByIdAndUpdate(id, {
        ...req.body,
        dob: formatdate(dob),
        date: formatdate(date),
        profileImage: imageurl
    }, { new: true })
    return res.redirect('/')
}