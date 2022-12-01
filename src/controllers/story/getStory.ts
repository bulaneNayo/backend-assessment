export {};
const storyUtils = require("../../utils/storyUtils");

exports.storyById = async (req, res) => {
  try {
    const { storyId } = req.query;

    let story = await storyUtils.getStoryById(storyId);
    return res.send(story);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
