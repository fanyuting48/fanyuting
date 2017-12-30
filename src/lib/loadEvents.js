const url = 'http://localhost:8080/api/data/events?includePlainTextContent=true'

const username = 'fanyuting';
const password = 'scott0694';

const options = {
    headers: {
      Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
    },
}

export const loadEvents = () => {
  return fetch(url, options)
    .then(res => res.json())
}
