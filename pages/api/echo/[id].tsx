import { NextApiRequest, NextApiResponse } from "next";

interface NextApiRequestID extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: NextApiRequestID, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(req.query.id);
}
