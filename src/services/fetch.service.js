import config from "../utils/config/config.json";

async function performGetApiCall(parameters) {
  const response = await fetch(`${config.url}${parameters}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return response;
}

export { performGetApiCall };
