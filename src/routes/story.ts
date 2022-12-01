import express from "express";
const router = express.Router();
const userController = require("../controllers/story/createStory");
const publishStory = require("../controllers/story/publishStory");
const unpublishStory = require("../controllers/story/unpublishStory");
const republishStory = require("../controllers/story/republishStory");
const updateStory = require("../controllers/story/updateStory");
const popularStories = require("../controllers/story/getPopularStories");
const mostPopularStory = require("../controllers/story/singleMostViewed");
const getStoryById = require("../controllers/story/getStory");
const updateStoryPopularity = require("../controllers/story/updateStoryPopularity");

router.post("/", userController.createStory);
router.post("/publish", publishStory.publishNewStory);
router.post("/unpublish", unpublishStory.unpublishUserStory);
router.post("/republish", republishStory.republishUserStory);
router.put("/update", updateStory.updateUserStory);
router.put(
  "/update/popularity",
  updateStoryPopularity.updateUserStoryPopularity
);
router.get("/popular", popularStories.getTrendingStories);
router.get("/single/popular", mostPopularStory.singleMostPopularStory);
router.get("/single", getStoryById.storyById);

export default router;