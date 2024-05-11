import express, { Request, Response , Application, NextFunction } from 'express';
import * as dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from './routes';
import bodyParser from 'body-parser';

dotenv.config();

interface UserBasicInfo {
  id: number;
  email: string;
  isAdmin: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserBasicInfo | null;
    }
  }
}

if (!process.env.PORT) {
  console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10) || 7000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: 'Internal server error' });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});