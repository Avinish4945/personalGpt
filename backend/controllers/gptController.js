const GPT = require("../models/GPT");

exports.createGPT = async(req,res)=>{

    try{

        const {
            name,
            institutionType,
            description
        } = req.body;

        const gpt =
        await GPT.create({

            name,
            institutionType,
            description,

            owner:req.user.id

        });

        res.status(201).json(gpt);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.getMyGPTs = async(req,res)=>{

    try{

        const gpts =
        await GPT.find({

            owner:req.user.id

        });

        res.status(200).json(gpts);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

exports.getSingleGPT = async(req,res)=>{

    try{

        const gpt =
        await GPT.findById(
            req.params.id
        );

        if(!gpt){

            return res.status(404).json({
                message:"GPT not found"
            });

        }

        res.status(200).json(gpt);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};