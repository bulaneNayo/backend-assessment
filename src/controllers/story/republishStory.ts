export {};
const storyUtils = require("../../utils/storyUtils");

exports.republishUserStory = async (req, res) => {
  try {
    const { storyId } = req.body;
    let story = await storyUtils.republishStory(storyId);
    return res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
