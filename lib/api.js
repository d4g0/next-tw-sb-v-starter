async function getJSON(url) {
  // temp
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(
        `  ${new Date().toISOString()} | Error | ${res.status} | ${res.url}`
      );
    }
    const json = await res.json();
    //   console.log({json})
    return json;
  } catch (error) {
    console.log({ error });
    if (error.code) {
      throw new Error(
        // `Error | [${res.status}] ${res.statusText} |  ${res.url}`
        "System Error: " + error.code
      );
    }
    throw error;
  }
}

async function postJSON(url, data) {
  // headers
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Net Error: (${res.statusText}) ${res.url}`);
  }
  const json = await res.json();
  return json;
}

export async function getTasks(url) {
  const tasks = await getJSON(url);
  return tasks;
}

export async function getTaskById(id = "") {
  const t = await getJSON(process.env.NEXT_PUBLIC_DB_URL + `/tasks/${id}`);
  return t;
}
