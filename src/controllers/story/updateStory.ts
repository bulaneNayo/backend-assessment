
export {};
const storyUtils = require("../../utils/storyUtils");

exports.updateUserStory = async (req, res) => {
  try {
    const { storyId, updatedInfo } = req.body;

    let updatedStory = await storyUtils.updateStory(storyId, updatedInfo);

    return res.send(updatedStory);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};