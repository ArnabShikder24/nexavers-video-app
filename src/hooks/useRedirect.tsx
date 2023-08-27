import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();
  const redirect = (path: string) => navigate(path);
  return redirect;
};
