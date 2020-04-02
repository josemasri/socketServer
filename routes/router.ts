import { Router, Request, Response } from "express";

const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});

router.post("/mensajes", (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        mensaje: 'POST - Todo esta bien'
    });
});

export default router;