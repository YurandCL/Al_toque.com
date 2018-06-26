const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productosSchema  = new Schema({
  nombre : String,
  foto: String,
  precio : Number,
  categoria: String,
  descripcion: String,
  origen_producto: String
});

const productosModel = mongoose.model('productos', productosSchema);

module.exports = {
  create: (req,res,next)=>{
      const producto = new productosModel({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        foto: req.body.foto,
        precio: req.body.precio,
        categoria : req.body.categoria,
        descripcion : req.body.descripcion,
        origen_producto : req.body.origen_producto
      });
      producto
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Producto creado con exito',
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
     productosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Producto Actualizado'
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
         .select('_id nombre foto precio categoria descripcion origen_producto')
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
    productosModel.find()
      .select('_id nombre foto precio categoria descripcion origen_producto')
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
      productosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Producto eliminada'
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
