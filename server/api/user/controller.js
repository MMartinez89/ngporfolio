import db from '../../models'
import { Sequelize } from '../../models'

class UsersController {
    static Fetch(req, res) {
        db.User.findAndCountAll().then((users) => {
                res.status(200).json(users);
            })
            .catch(err => {
                res.status(400).json({ message: 'Problemas al intentar conectarse a la base de datos' + err })
            })
    }

    static FetchOne(req, res) {
        const id = +req.params.id;
        db.User.findOne({
                where: { id }
            })
            .then((user) => {
                if (user === 0) {
                    res.status(404).json({
                        message: 'Not found'
                    });
                } else {
                    res.status(200).json({
                        ok: true,
                        user
                    })
                }
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'Problemas al intentar conectarse a la base de datos' + err,
                });
            });
    }

    static Create(req, res) {
        db.User.create(req.body)
            .then((user) => {
                res.status(200).json({
                    ok: true,
                    user,
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
        const id = +req.params.id;
        db.User.destroy({ where: { id } })
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
        db.User.update(req.body, {
                where: { id: req.body.id }
            })
            .then((user) => {
                res.status(200).json({
                    ok: true,
                })
            })
            .catch((err) => {
                res.status(400).json({ message: 'Resgistro no actualizado' })
            });
    }
}

export default UsersController;