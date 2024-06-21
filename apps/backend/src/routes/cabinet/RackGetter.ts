import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  const findRacks = await PrismaClient.rack.findMany({
    where: {
      cabinetID: req.query.cabinetID as string,
    },
    select: {
      rackID: true,
    },
    orderBy: {
      rackNumber: "asc",
    },
  });
  res.json(findRacks);
  console.log(findRacks);
});

export default router;
