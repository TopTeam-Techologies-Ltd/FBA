export const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);
  
    return `${day}${daySuffix} ${month}, ${year}`;
  };


  // Function to get the suffix for the date
export const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // special case for 11-13
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };