fetch("data.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Could not load college timings");
    }
    return response.json();
  })
  .then(function (data) {
    document.getElementById("cs").textContent =
      data.labs.computerScience;

    document.getElementById("ss").textContent =
      data.labs.softwareSystems;

    document.getElementById("notice").textContent =
      data.notice;
  })
  .catch(function (error) {
    document.getElementById("cs").textContent =
      "Timings will be updated soon.";

    document.getElementById("ss").textContent =
      "Timings will be updated soon.";

    document.getElementById("notice").textContent =
      "Please check the college notice board.";
    console.error(error);
  });
