async function fetchWrapper(url) {
  const response = await fetch(url);

  if (!response.ok) {
    return {
      data,
      isError: true,
    };
  }

  const data = await response.json();

  return {
    data,
    isError: false,
  };
}

export async function getApod() {
  return fetchWrapper(
    `${import.meta.env.VITE_BASE_API}/apod?api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`
  );
}
