import { useQuery } from "react-query";
import axios from "axios";

export function ReactQueryExample() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get("https://pets-support-backend.onrender.com/api/v1/notices/sell")
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { name, breed, price, category } = data.notices[0];
  console.log(data);
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <strong>👀 {price}</strong> <strong>✨ {name}</strong>{" "}
      <strong>🍴 {breed}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}
