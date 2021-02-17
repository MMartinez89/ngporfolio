import db from '../../models'
import { Sequelize } from '../../models'

class TestimonialsController {
    static Fetch(req, res) {
        db.Testimonials.findAndCountAll().then((testimonials) => {
                res.status(200).json(testimonials);
            })
            .catch(err => {
                res.status(400).json({ message: 'Problemas al intentar conectarse a la base de datos' + err })
            })
    }

    static FetchOne(req, res) {
        const id = +req.params.id;
        db.Testimonials.findOne({
          where: { id },
        })
          .then((testimonials) => {
            if (testimonials === 0) {
              res.status(404).json({
                message: "Not found",
              });
            } else {
              res.status(200).json(testimonials);
            }
          })
          .catch((err) => {
            res.status(400).json({
              message:
                "Problemas al intentar conectarse a la base de datos" + err,
            });
          });
    }

    static Create(req, res) {
        db.Testimonials.create(req.body)
            .then((testimonials) => {
                res.status(200).json({
                    ok: true,
                    role,
                })
            })
            .catch(Sequelize.ValidationError, (msg) => {
                res.status(422).json({ message: msg.original.message })
            })
            .catch((err) => {
                res
                    .status(400)
                    .json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' })
            })
    }

    static Delete(req, res) {
        const id = +req.params.id
        db.Testimonials.destroy({ where: { id } })
            .then((result) => {
                if (result === 0) {
                    res.status(404).json({
                        error: 'Registro no Encontrado'
                    })
                } else {
                    res.status(200).json({
                        message: 'Registro Eliminado'
                    })
                }
            })
            .catch(Sequelize.ValidationError, (msg) => {
                res.status(422).json({ message: msg.original.message })
            })
            .catch((err) => {
                res
                    .status(400)
                    .json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' })
            })
    }
    static Update(req, res) {
        db.Testimonilas.update(req.body, {
                where: { id: req.body.id },
            })
            .then((testimonials) => {
                res.status(201).json({
                    ok: true,
                });
            })
            .catch((err) => {
                res.status(400).json({ message: 'Registro no actualizado' });
            });
    }
}

export default TestimonialsController;