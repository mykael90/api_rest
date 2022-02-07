"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const router = new (0, _express.Router)();

// router.get('/', userController.index); não precisa listar usuários
router.get('/', _UserController2.default.show);
router.put('/', _UserController2.default.update);
router.delete('/', _UserController2.default.delete);

exports. default = router;

 const userOpenedRouter = new (0, _express.Router)(); exports.userOpenedRouter = userOpenedRouter;
exports.userOpenedRouter.post('/', _UserController2.default.store); // não precisa autenticação
