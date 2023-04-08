const getNextUserId = () => {
  let nextUserId = localStorage.getItem("nextUserId");
  if (!nextUserId) {
    nextUserId = 2;
  }
  nextUserId = +nextUserId;
  localStorage.setItem("nextUserId", nextUserId + 1 + "");
  return nextUserId;
};

export default getNextUserId;
