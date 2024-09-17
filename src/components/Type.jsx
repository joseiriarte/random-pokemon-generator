export const Type = ({ name, color }) => {
  return (
    <li className={`${color} px-2 py-1 rounded-3xl font-medium text-center text-neutral-50`}>{name.toUpperCase()}</li>
  );
};
