export {};
const { ObjectId } = require("mongodb");
const Story = require("../../models/story.ts");

/**
 * doesStoryExist
 *
 * checks if there are any Storyes with the given title
 * returns true of it exists and false otherwise
 *
 * @param {String} title
 * @returns {Boolean}
 */
exports.doesStoryExist = async (title) => {
  const story = await Story.findOne({
    title: { $regex: title, $options: "i" },
  }).exec();

  return Promise.resolve(story != null);
};

/**
 * getPublishedStoryList
 *
 *
 * @returns Resolved promise of a list published Story objects
 */
exports.getPublishedStoryList = async () => {
  try {
    let story = await Story.find({ isPublished: true }).exec();
    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * publishStory
 *
 * publish Story with given StoryId
 * @param {String} storyId
 * @returns published Story object
 */
exports.publishStory = async (storyId) => {
  try {
    let story = await Story.findOneAndUpdate(
      { _id: new ObjectId(storyId) },
      { isPublished: true },
      { new: true }
    ).exec();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * publishStory
 *
 * publish Story with given StoryId
 * @param {String} storyId
 * @returns published Story object
 */
exports.republishStory = async (storyId) => {
  try {
    let story = await Story.findOneAndUpdate(
      { _id: new ObjectId(storyId) },
      { isPublished: true },
      { new: true }
    ).exec();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * unpublishStory
 *
 * Remove a Story from public view
 *
 * @param {String} storyId
 * @returns  Story object
 */
exports.unpublishStory = async (storyId) => {
  try {
    let story = await Story.findOneAndUpdate(
      { _id: new ObjectId(storyId) },
      { isPublished: false },
      { new: true }
    ).exec();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * getStoryById
 *
 * fetch a single Story object given a StoryId
 * @param {String} storyId
 * @returns Story object
 */
exports.getStoryById = async (storyId) => {
  try {
    let story = await Story.findOne({ _id: new ObjectId(storyId) }).exec();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * updateStory
 *
 * used to update root level elements / attributes of a Story
 * @param {String} storyId
 * @param {Json object} newData
 * @returns updated Story object
 */
exports.updateStory = async (storyId, newData) => {
  try {
    let updatedQiz = await Story.findOneAndUpdate(
      { _id: new ObjectId(storyId) },
      newData,
      { new: true }
    ).exec();

    return Promise.resolve(updatedQiz);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * findMostPlayedStory
 *
 *
 * @returns Story object
 */
exports.findMostViewedStory = async () => {
  try {
    let story = await Story.findOne({})
      .sort({ popularity: -1 })
      .limit(1)
      .exec();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * findMostPlayedStoryList
 *
 *
 * @returns list of Story objects
 */
exports.findPopularStories = async () => {
  try {
    let storiesList = await Story.find({ isPublished: true })

      .sort({ popularity: -1 })
      .limit(10)
      .exec();

    return Promise.resolve(storiesList);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * updateStoryPopularity
 *
 * @param {string} storyId
 * @returns Story object
 */
exports.updateStoryPopularity = async (storyId) => {
  try {
    let story = await Story.findOne({ _id: ObjectId(storyId) }).exec();

    if (story.isPublished !== true)
      return Promise.reject("Cannot update unpublished story!");
    story.popularity = story.popularity + 1;
    //story["popularity"] = story["popularity"] + 1;
    story = await story.save();

    return Promise.resolve(story);
  } catch (error) {
    return Promise.reject(error);
  }
};
