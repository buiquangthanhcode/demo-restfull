import express from 'express';
import { getAllActors, getActorById, createActor, updateActor, deleteActor } from '../controllers/Actor.controller.js';
const ActorRouter = express.Router();

ActorRouter.get('/actors', getAllActors);
ActorRouter.get('/actors/:id', getActorById);
ActorRouter.post('/actors', createActor);
ActorRouter.put('/actors/:id', updateActor);
ActorRouter.delete('/actors/:id', deleteActor);

export default ActorRouter;