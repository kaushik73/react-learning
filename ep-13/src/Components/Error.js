import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>404 Page is this..</h2>
      Error : <p>{err}</p>
    </>
  );
};

export default Error;
