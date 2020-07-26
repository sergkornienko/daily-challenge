/**
 * generate text for "like" system from Facebook
 * check tests for more details
 * @param {Array<string>} users - Names of ussers who likes
 * @returns {string}
 */
const likes = (users) => {
  switch (users.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${users[0]} likes this`;
    case 2:
      return `${users[0]} and ${users[1]} like this`;
    case 3:
      return `${users[0]}, ${users[1]} and ${users[2]} like this`;
    default:
      return `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
  };
}
module.exports = {
  likes,
};