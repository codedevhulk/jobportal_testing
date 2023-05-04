import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div>
      {error.status} {error.statusText}
    </div>
  );
};

export { ErrorPage };
