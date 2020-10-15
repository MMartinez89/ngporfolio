import db from '../../models'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
const config = require('../../config').config

class AuthController {
    static Login(req, res) {
        const { body } = req
        db.User.findOne({
                where: {
                    email: body.email
                },
            }).then(user => {
                if (!user) {
                    return res.status(400).json({
                        ok: false,
                        message: 'Credenciales incorrectas',
                        errors: 'Credenciales incorrectas',
                    })
                }
                if (!bcrypt.compareSync(body.password, user.password)) {
                    return res.status(400).json({
                        ok: false,
                        message: 'Credenciales incorrectas',
                        errors: 'Credenciales incorrectas',
                    })
                }
                // Crear un token
                // expira en 4hs
                user.password = ':P'
                const token = jwt.sign({ user: user }, config.authJwtSecret, { expiresIn: 14400 })
                res.status(200).json({
                    ok: true,
                    user: user,
                    token,
                    id: user.id,
                })
            })
            .catch(err => {
                res.status(400).json({ message: 'issues trying to connect to database' + err })
            })
    }
}
export default AuthController