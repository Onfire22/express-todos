import express from 'express';
import { Response, Request } from 'express';
import router from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(express.json());

app.use(router);

app.all(/.*/, (req: Request, res: Response) => {
	res.status(404).send({ message: 'not found' });
});

app.use(errors());

app.listen(3001, () => {
	console.log('server is running on port 3001');
});
