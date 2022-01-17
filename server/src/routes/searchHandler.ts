import asyncHandler from "../utils/asyncHandler";
import handleError from "../utils/handleError";
import searchMovies from "../controllers/searchMovies";

const searchHandler = asyncHandler(async (req, res) => {
  const { title } = req.query;
  if (!title) {
    res.status(400).send("Missing query parameter 'title'");
    return;
  }

  const page = req.query.page ? parseInt(req.query.page as string, 10) : 0;
  if (page < 0) {
    res.status(400).send("Invalid page number");
    return;
  }

  try {
    const result = await searchMovies(title as string, page + 1);
    res.json(result);
  } catch (err) {
    handleError(res, err as Error);
  }
});

export default searchHandler;
