const fs = require("fs");

fs.readFile("CSV\LiveMonthLiveAction.csv", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
