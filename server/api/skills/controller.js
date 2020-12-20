import db from '../../models'
import { Sequelize } from '../../models'

class SkillsController {
    static Fetch(req, res) {
        db.Skill.findAndCountAll({
                order: [
                    ['id', 'ASC']
                ],
                include: [{
                    model: db.Skill,
                    as: 'parent'
                }]
            }).then((skills) => {
                res.status(200).json(skills);
            })
            .catch(err => {
                res.status(400).json({ message: 'Problemas al intentar conectarse a la base de datos' + err })
            })
    }

    static FetchOne(req, res) {
        const id = +req.params.id;
        db.Skill.findOne({
                where: { id }
            })
            .then((Skill) => {
                if (Skill === 0) {
                    res.status(404).json({
                        message: 'Not found'
                    });
                } else {
                    res.status(200).json(skill)
                }
            })
            .catch((err) => {
                res.status(400).json({
                    message: 'Problemas al intentar conectarse a la base de datos' + err,
                });
            });
    }

    static Create(req, res) {
        const { name, ParentId, active } = req.body;
        const UserId = req.user.id;
        db.Skill.create({ name, ParentId, UserId, active })
            .then((skill) => {
                res.status(200).json({
                    ok: true,
                    skill,
                });
            })
            .catch(Sequelize.ValidationError, (msg) => {
                res.status(422).json({ message: msg.original.message });
            })
            .catch((err) => {
                res
                    .status(400)
                    .json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' });
            });
    }

    static Delete(req, res) {
        const id = +req.params.id
        db.Skill.destroy({ where: { id } })
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
        db.Skill.update(req.body, {
                where: { id: req.body.id },
            })
            .then((skill) => {
                res.status(201).json({
                    ok: true,
                });
            })
            .catch((err) => {
                res.status(400).json({ message: 'Registro no actualizado' });
            });
    }
}

export default SkillsController;