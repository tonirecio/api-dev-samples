import { useFetchData } from '../../hooks/useFetchData';
import { getWithPause as getUser } from '../../services/users';
// import { Error } from '../Error';
// import { Loader } from '../Loader';

export const User = () => {

  const [data, isLoaded, isError] = useFetchData({
    key: 1,
    action: getUser(1),
  });

  if (!isLoaded) {
    return <div>Cargando datos...</div>;
  }

  if (isError) {
    return <div>Ha ocurrido un error: {isError.message}</div>;
  }

  console.log('data', data);

  return (
    <div>
      <p>Nombre: {data.first_name} {data.last_name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};
