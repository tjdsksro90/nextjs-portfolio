import axios from 'axios';
import { TOKEN, DATABASE_ID } from '@/config/index';
export const getLists = async () => {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    // url: `https://api.notion.com/v1/databases/d2cd2c59eeea434aad1fb668a2d0ae98/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      // Authorization: `Bearer secret_OXDKakcJb8e7XBZGZpNIMkaHiXI6teTLIaaZu5Wn0WM`,
    },
    data: { page_size: 100 },
  };

  axios
    .request(options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};
