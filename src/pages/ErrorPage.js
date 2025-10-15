import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! Something went wrong!</h1>
        <p>Sorry, the page you’re looking for doesn’t exist.</p>
      </main>
    </>
  );
}

export default ErrorPage;
