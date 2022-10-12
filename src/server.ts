import { rest, setupWorker } from 'msw';

import GET_ALL_API from 'api/v1/items/getAll/get.json';

const handlers = [
  rest.get('/api/v1/items/getAll', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(GET_ALL_API));
  })
];

const server = setupWorker(...handlers);

export default server;
