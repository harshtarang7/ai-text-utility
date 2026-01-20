import { Request, Response } from "express";
import { AIService } from "../services/ai.service";

export const summarizeController = async (req:Request,res:Response)=>{
    const {text,maxLength = 100}=req.body;
    const summary = await AIService.summarize(text,maxLength);
    res.json({summary});
};
