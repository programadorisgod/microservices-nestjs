export const date = () => {
  const dateObject = new Date();
  const dateOfDispatch = `${dateObject.toLocaleDateString('es-ES')} at: ${dateObject.toLocaleTimeString('es-ES')}`;
  return dateOfDispatch;
};
