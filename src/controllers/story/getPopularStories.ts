export {};
const storyUtils = require("../../utils/storyUtils");

exports.getTrendingStories = async (req, res) => {
  try {
    let story = await storyUtils.findPopularStories();
    res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
