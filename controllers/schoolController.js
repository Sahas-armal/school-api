const db = require("../config/db");
const getDistance = require("../utils/distance");

// ADD SCHOOL API
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "School added successfully"
    });
  });
};

// LIST SCHOOLS API
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "User latitude and longitude required"
    });
  }

  db.query("SELECT * FROM schools", (err, schools) => {
    if (err) {
      return res.status(500).json(err);
    }

    const sortedSchools = schools
      .map((school) => {
        const distance = getDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          school.latitude,
          school.longitude
        );

        return {
          ...school,
          distance: distance.toFixed(2) + " km"
        };
      })
      .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));

    res.json(sortedSchools);
  });
};