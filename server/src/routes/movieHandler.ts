import asyncHandler from "../utils/asyncHandler";
import handleError from "../utils/handleError";
import fetchMovie from "../controllers/fetchMovie";

const movieHandler = asyncHandler(async (req, res) => {
  try {
    const result = await fetchMovie(req.params.imdbId);
    res.json(result);
  } catch (err) {
    handleError(res, err as Error);
  }
});

export default movieHandler;
