import { Router } from "express";

import movieHandler from "./movieHandler";
import searchHandler from "./searchHandler";

const router = Router();

router.get("/movie/:imdbId", movieHandler);
router.get("/search", searchHandler);

export default router;
