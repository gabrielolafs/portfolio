// for the show all page for shirts

import express, { Router } from "express";
import PrismaClient from "../../../bin/database-connection";
import { Shirt } from "../../../../../../packages/common/src/cloths";

const router: Router = express.Router();

// taken from a different router I was working on in a different project
router.post("/", async function (req, res) {
  console.log(res);
  console.log(req);
  const shirt: Shirt = req.body;

  try {
    const postedPiece = await PrismaClient.piece.create({
      data: {
        name: shirt.name,
        price: shirt.price,
        wears: shirt.wears ? shirt.wears : 0,
        wearsSinceWash: shirt.wearsSinceWash ? shirt.wearsSinceWash : 0,
        lastWash: shirt.lastWash ? shirt.lastWash : new Date(),
      },
    });

    await PrismaClient.piece.upsert({
      where: {
        pieceID: postedPiece.pieceID,
      },
      create: {
        postedPiece: postedPiece.postedPiece,
        size: shirt.size,
      },
      update: {
        size: shirt.size,
      },
    });

    res
      .status(200)
      .json({ message: "a new Shirt has been put into the database" });
    console.log("Successfully posted to Shirt");
  } catch (error) {
    console.error("Unable to post to Shirt");
    console.log(error);
    res.sendStatus(500);
    return;
  }
});

router.get("/", async function (req, res) {
  const shirt = await PrismaClient.findMany();
  res.json(shirt);
});

export default router;
