export const Type = ({ name, color }) => {
  return (
    <li className={`${color} flex justify-center items-center px-2 py-1 rounded-3xl font-medium text-neutral-50`}>
      {name.toUpperCase()}
    </li>
  );
};
