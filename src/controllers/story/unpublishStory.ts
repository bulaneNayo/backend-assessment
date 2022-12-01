export {};
const storyUtils = require("../../utils/storyUtils");

exports.unpublishUserStory = async (req, res) => {
  try {
    const { storyId } = req.body;
    let story = await storyUtils.unpublishStory(storyId);
    return res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
