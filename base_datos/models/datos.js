const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const datosSchema  = new Schema({
  nombres : String,
  apellidos : String,
  edad : String,
  telefono : String,
  pais : String,
  sexo : String,
  email : String,
  direccion : String
});

const datosModel = mongoose.model('datos', datosSchema);

module.exports = {
  create: (req,res,next)=>{
      const dato = new datosModel({
        _id: new mongoose.Types.ObjectId(),
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad : req.body.edad,
        telefono : req.body.telefono,
        sexo : req.body.sexo,
        email : req.body.email,
        direccion : req.body.direccion
      });
      dato
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Datos creados con exito',
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
     datosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Datos Actualizados'
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
         .select('_id nombres apellidos edad telefono pais sexo email direccion')
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
    datosModel.find()
      .select('_id nombres apellidos edad telefono pais sexo email direccion')
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
      datosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Datos eliminados'
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
