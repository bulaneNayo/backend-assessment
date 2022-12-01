export {};
const storyUtils = require("../../utils/storyUtils");

exports.singleMostPopularStory = async (req, res) => {
  try {
    let story = await storyUtils.findMostViewedStory();
    res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
