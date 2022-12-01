const storyUtils = require("../../utils/storyUtils");

exports.publishNewStory = async (req, res) => {
  try {
    const { storyId } = req.body;
    let story = await storyUtils.publishStory(storyId);
    return res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
