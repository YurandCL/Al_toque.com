const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const personalSchema  = new Schema({
  nombres: String,
  apellidos: String,
  edad: Number,
  fecha_nac: Date,
  direccion: String,
  email: String
});

const personalModel = mongoose.model('personal', personalSchema);

module.exports = {
  create: (req,res,next)=>{
      const persona = new personalModel({
        _id: new mongoose.Types.ObjectId(),
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        fecha_nac: req.body.fecha_nac,
        direccion: req.body.direccion,
        email: req.body.email
      });
      persona
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Persona creada con exito',
                  data: {
                      ...result
                  }
              });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
   },

   update:(req,res,next) => {
     const id = req.params.id;
     let updateParams = {
         ...req.body
     };
     personalModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Persona Actualizada'
           });
         })
         .catch(err =>{
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
   },

   findOne: (req,res,next)=>{
     const id = req.params.id;
     Plan.findById(id)
         .select('_id nombres apellidos edad fecha_nac direccion email')
         .exec()
         .then(doc => {
             if(doc){
               res.status(200).json({
                   data: doc,
               });
             }else{
               res.status(404).json({message: 'No valid entry found for provided ID'});
             }
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
},
  find: (req,res,next) => {
    personalModel.find()
      .select('_id nombres apellidos edad fecha_nac direccion email')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          data: docs.map(doc=>{
            return{
              ...doc
            };
          })
        };
        res.status(200).json(response);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({
          error:err
        });
      });
  },
  delete: (req,res,next)=>{
      const id = req.params.id;
      personalModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Persona eliminada'
              });
          })
          .catch(err =>{
              consoles.log(err);
              res.status(500).json({
                error: err
              });
          });
  }

};
