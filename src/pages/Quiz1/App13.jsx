//===[async: try-catch]

const getUsers = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('error');
    const data = await response.json();
    setUsers(data);
  } catch (e) {}
};

//=====[async: then.catch]

const getUsers2 = () => {
  fetch(url, option)
    .then((response) => {
      if (!response.ok) throw new Error('error');
      return response.json();
    })
    .then((data) => {
      setUsers(data);
    })
    .catch((e) => {})
    .finally(() => {});
};

const getUsers = () => {};
-fetch(url, opt).then().then().catch().finally() -
  fetch(url)
    .then((response) => {
      return xxx;
    })
    .then((data) => {})
    .catch((e) => {});
