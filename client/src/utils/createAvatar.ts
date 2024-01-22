const PRIMARY_NAME: string[] = ['A', 'N', 'H', 'L', 'Q', '9', '8'];
const INFO_NAME: string[] = ['F', 'G', 'T', 'I', 'J', '1', '2', '3'];
const SUCCESS_NAME: string[] = ['K', 'D', 'Y', 'B', 'O', '4', '5'];
const WARNING_NAME: string[] = ['P', 'E', 'R', 'S', 'C', 'U', '6', '7'];
const ERROR_NAME: string[] = ['V', 'W', 'X', 'M', 'Z'];

function getFirstCharacter(name: string): string {
  return name && name.charAt(0).toUpperCase();
}

function getAvatarColor(name: string): string {
  if (PRIMARY_NAME.includes(getFirstCharacter(name))) return 'primary';
  if (INFO_NAME.includes(getFirstCharacter(name))) return 'info';
  if (SUCCESS_NAME.includes(getFirstCharacter(name))) return 'success';
  if (WARNING_NAME.includes(getFirstCharacter(name))) return 'warning';
  if (ERROR_NAME.includes(getFirstCharacter(name))) return 'warning';
  return 'default';
}

interface Avatar {
  name: string;
  color: string;
}

export default function createAvatar(name: string): Avatar {
  return {
    name: getFirstCharacter(name),
    color: getAvatarColor(name),
  };
}
