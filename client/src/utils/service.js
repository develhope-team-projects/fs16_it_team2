export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body,
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: true, status: response.status, message: data };
      // throw new Error(`HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`Post failed to ${url}. ${error}`);
  }
};

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      return { error: true, status: response.status, message: data };
      // throw new Error(`HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`Fetch failed from ${url}. ${error}`);
  }
};
