const { update } = require('../models/Task')
const Task = require('../models/Task')

const TaskController ={
    async create(req,res){
        try {
            const task = await Task.create({title:req.body.title,completed:false})
            res.status(201).send({msg:'Tu vaina loca se ha creado correctamente',task})
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    },
    async getAll(req,res){
        try {
            const tasks = await Task.find() 
            res.send({msg:'Todas tus vainas locas',tasks})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async getById(req,res){
        try {
           const task = await Task.findById(req.params._id)
           res.send({msg:'Tu vaina loca por id',task})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async markAsCompleted(req,res){
        try {
            const taskCompleted = await Task.findByIdAndUpdate(req.params._id,{completed:true},{new:true})
            res.send({msg:"Tu vaina loca completada", taskCompleted})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async update(req,res){
        try {
            const taskUpdated = await Task.findByIdAndUpdate(req.params._id,{title:req.body.title},{new:true})
            res.send({msg:'Ha mutado tu vaina loca mutante',taskUpdated})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    async destroy(req,res){
        try {
            const taskDeleted = await Task.findByIdAndDelete(req.params._id)
            res.send({msg:'Tu vaina ha explotado locamente',taskDeleted})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = TaskController