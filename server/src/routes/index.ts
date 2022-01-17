import { Router } from "express";

import movieHandler from "./movieHandler";

const router = Router();

router.get("/movie/:imdbId", movieHandler);

export default router;
