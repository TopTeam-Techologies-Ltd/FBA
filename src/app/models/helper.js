
function getHighestApplications(enrollment) {
    const courseCount = {};
    const stateCount = {};
    // Count occurrences of each course and state
    enrollment.forEach(({ course, state }) => {
      courseCount[course] = (courseCount[course] || 0) + 1;
      stateCount[state] = (stateCount[state] || 0) + 1;
    });
    // Find the course with the highest applications
    const topCourse = Object.entries(courseCount).reduce((max, [course, count]) =>
      count > max.count ? { course, count } : max, { course: null, count: 0 });
    // Find the state with the highest applications
    const topState = Object.entries(stateCount).reduce((max, [state, count]) =>
      count > max.count ? { state, count } : max, { state: null, count: 0 });
    return { topCourse, topState };
  }
  const result = getHighestApplications(enrollment);
  
  console.log("Course with the highest applications:", result.topCourse);
  console.log("State with the highest applications:", result.topState);