import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Router from "./Route";
import { AuthProvider } from "./Helpers/AuthContext";

import api from "./Helpers/ApiEndpoint";

function App() {
  const history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("token");
    const verifiyToken = async () => {
      try {
        let res = await api.get("/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        localStorage.removeItem("token");
        history.push("/login");
      }
    };

    verifiyToken();
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
