import Chance from 'chance';
import express from 'express'
const chance = new Chance();


const animals = [...Array(100).keys()].map(id => ({
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
}))

const router = express.Router()

/* GET users listing. */
router.get('', function (req, res, next) {
    const q = req.query.q?.toLocaleLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLocaleLowerCase().includes(q))
    res.json(results)
})
router.get('/', function (req, res, next) {
    res.json(animals)
})

export default router

