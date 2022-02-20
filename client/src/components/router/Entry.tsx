import { Outlet, useParams } from "react-router-dom";

const Entry = () => {
  const params = useParams();
  return (
    <div>
      {params.store === undefined && <span>Entry</span>}
      <Outlet />
    </div>
  );
};

export default Entry;
