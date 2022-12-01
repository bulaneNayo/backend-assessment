export {};
const Story = require("../../../models/story.ts");

exports.createStory = async (req, res) => {
  try {
    let { title, text } = req.body;
    let newStory = await new Story({
      title: title,
      text: text,
    }).save();
    return res.status(200).json({
      success: true,
      newStory,
    });
  } catch (error) {
    console.log(error);
  }
};
