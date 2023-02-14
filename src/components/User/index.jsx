import { useFetchData } from '../../hooks/useFetchData';
import { getWithPause as getUser } from '../../services/users';
import { Error } from '../Error';
import { Loader } from '../Loader';

export const User = ({ id }) => {

  const [data, isLoaded, isError] = useFetchData({
    key: id,
    action: getUser(id),
  });

  if (!isLoaded) {
    return <Loader />
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <p>Nombre: {data.first_name} {data.last_name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};
