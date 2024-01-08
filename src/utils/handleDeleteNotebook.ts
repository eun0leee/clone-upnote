const handleDeleteNotebook = (
  e: React.MouseEvent<HTMLButtonElement>,
  title: string,
) => {
  e.preventDefault();
  console.log(title);
};

export default handleDeleteNotebook;
