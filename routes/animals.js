const express = require('express');

const{
    findAnimals,
    findAnimalById,
    createAnimal,
    deleteAnimals,
    updateAnimals,
}=require('../db/animalsCrud');

const router=express.Router();

router.get('/',async(req,res)=>{
    const animals=await findAnimals();
    res.json(animals);
})

router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const animals=await findAnimalById(id);
    if(animals){
        res.json(animals)
    }else{
        res.status(404).end('Animal not found')
    }
});

router.post('/',async(req,res)=>{
    const newAnimal=await createAnimal(req.body);
    res.status(201).json(newAnimal);
})
router.put('/:id',async(req,res)=>{
    const id=req.params.id;
    await updateAnimals(id,req.body);
    res.status(200).end();
})
router.delete('/:id',async(req,res)=>{
    await deleteAnimals(req.params.id);
    res.status(204).end();
})


module.exports=router;