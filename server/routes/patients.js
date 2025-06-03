const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
  const patients = await prisma.patient.findMany();
  res.json(patients);
});

router.post('/', async (req, res) => {
  const patient = await prisma.patient.create({
    data: req.body,
  });
  res.json(patient);
});

module.exports = router;
