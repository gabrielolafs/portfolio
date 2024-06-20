// flower service request router
import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const networks = await PrismaClient.network.findMany({
    select: {
      networkID: true,
    },
    orderBy: {
      networkID: "asc",
    },
  });
  res.json(networks);
});

export default router;
