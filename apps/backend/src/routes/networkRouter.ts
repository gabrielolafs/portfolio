import express, { Router } from "express";
import PrismaClient from "../bin/database-connection.ts";
import { Network } from "common/src/networking.ts";

const router: Router = express.Router();

router.post("/", async function (req, res) {
  const network: Network = req.body;

  try {
    await PrismaClient.network.create({
      data: {
        networkID: network.networkID,
        name: network.name,
      },
    });

    res.status(200).json({ message: "Successfully added to the network" });
    console.log("Successfully posted to flower");
  } catch (error) {
    console.error("Unable post the network");
    console.log(error);
    res.sendStatus(500);
    return;
  }
});

// router.get("/", async function (req, res) {
//   const networks = await PrismaClient.network.findUnique({
//     include: {
//       networkID: true,
//     },
//   });
//   res.json(networks);
// });

export default router;
