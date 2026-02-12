import Build from '../models/build.js';

// Save a new car customization (authenticated)
export async function saveBuild(req, res) {
  try {
    const { carModel, color, selectedParts } = req.body;
    const userId = req.user.userId; // from JWT middleware

    const newBuild = new Build({
      userId,
      carModel,
      color,
      selectedParts,
      createdAt: new Date()
    });
    await newBuild.save();
    res.status(201).json({ message: 'Build saved successfully', build: newBuild });
  } catch (error) {
    res.status(500).json({ message: 'Error saving build', error: error.message });
  }
}

// Get saved builds by user
export async function getBuildsByUser(req, res) {
  try {
    const userId = req.params.userId;
    const builds = await Build.find({ userId });
    res.json(builds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching builds', error: error.message });
  }
}
