
const AnimalModel=require('./modules/animals');

const findAnimals=async()=>{
    const animals= await AnimalModel.find();
    return animals;
}
const findAnimalById=async(id)=>{
    const animal=await AnimalModel.findById(id);
    return animal;
}

const createAnimal=async(animal)=>{
    const newAnimal=new AnimalModel(animal);
    return newAnimal.save();
}
const updateAnimals=async(id,animal)=>{
    return AnimalModel.findByIdAndUpdate(id,animal);
}
const deleteAnimals=async(id)=>{
    return AnimalModel.findByIdAndDelete(id);
}
module.exports={
    findAnimals,
    findAnimalById,  
    createAnimal,
    updateAnimals,
    deleteAnimals,

}