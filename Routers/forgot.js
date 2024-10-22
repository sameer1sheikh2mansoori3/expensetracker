import express from 'express';

import fogotPassword from '../controllers/forgetController';
import resetController from '../controllers/resetController';
// import updatePassword  from '../controllers/updatepasswordController'

const router = express.Router();

router.route("/api/auth/request-reset").post(fogotPassword);

// router.route("/api/auth/reset-password/:token").get(resetController);

// router.route("/api/auth/reset-password/:token").post(updatePassword);

export default router;