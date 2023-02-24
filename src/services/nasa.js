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
    `https://api.nasa.gov/planetary/apod?api_key=uYoVhimIOCAajsEf4MinIUeqaVfofsG9F31pBk32`
  );
}

export async function getMars(){
  return fetchWrapper(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=uYoVhimIOCAajsEf4MinIUeqaVfofsG9F31pBk32&feedtype=json&ver=1.0`
  );
}

export async function getCME() {
  return fetchWrapper(
    `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=uYoVhimIOCAajsEf4MinIUeqaVfofsG9F31pBk32`
  );
}
