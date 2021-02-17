import db from '../../models'
import { Sequelize } from '../../models'

class TeamController {
    static Fetch(req, res) {
        db.Team.findAndCountAll().then((team) => {
                res.status(200).json(team);
            })
            .catch(err => {
                res.status(400).json({ message: 'Problemas al intentar conectarse a la base de datos' + err })
            })
    }

    static FetchOne(req, res) {
        const id = +req.params.id;
        db.Team.findOne({
          where: { id },
        })
          .then((team) => {
            if (team === 0) {
              res.status(404).json({
                message: "Not found",
              });
            } else {
              res.status(200).json(team);
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
        db.Team.create(req.body)
            .then((team) => {
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
        db.Team.destroy({ where: { id } })
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
        db.Team.update(req.body, {
                where: { id: req.body.id },
            })
            .then((team) => {
                res.status(201).json({
                    ok: true,
                });
            })
            .catch((err) => {
                res.status(400).json({ message: 'Registro no actualizado' });
            });
    }
}

export default TeamController;