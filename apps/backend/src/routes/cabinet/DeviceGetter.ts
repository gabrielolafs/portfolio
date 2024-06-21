import express, { Router } from "express";
import PrismaClient from "../../bin/database-connection.ts";

const router: Router = express.Router();

router.get("/", async function (req, res) {
  console.log("i am here");

  const findDevices = await PrismaClient.device.findMany({
    where: {
      rackID: req.query.rackID as string,
    },
    select: {
      bottomURack: true,
      name: true,
      URacksUsed: true,
    },
    orderBy: {
      bottomURack: "asc",
    },
  });

  res.json(findDevices);
  console.log(findDevices);
});

export default router;
