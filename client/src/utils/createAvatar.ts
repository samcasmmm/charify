const PRIMARY_NAME = ["A", "N", "H", "L", "Q", "9", "8"];
const INFO_NAME = ["F", "G", "T", "I", "J", "1", "2", "3"];
const SUCCESS_NAME = ["K", "D", "Y", "B", "O", "4", "5"];
const WARNING_NAME = ["P", "E", "R", "S", "C", "U", "6", "7"];
const ERROR_NAME = ["V", "W", "X", "M", "Z"];

function getFirstCharacter(name: string) {
  return name && name.charAt(0).toUpperCase();
}

function getAvatarColor(name: string) {
  const firstChar = getFirstCharacter(name);

  if (PRIMARY_NAME.includes(firstChar)) return `text-blue-600`;
  if (INFO_NAME.includes(firstChar)) return `text-purple-600`;
  if (SUCCESS_NAME.includes(firstChar)) return `text-emerald-600`;
  if (WARNING_NAME.includes(firstChar)) return `text-yellow-600`;
  if (ERROR_NAME.includes(firstChar)) return `text-rose-600`;
  return `text-default`;
}

export default function createAvatar(name: string) {
  return {
    name: getFirstCharacter(name),
    colorClass: getAvatarColor(name),
  };
}
