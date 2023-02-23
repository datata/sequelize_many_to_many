const express = require('express');
const {Product} = require('./models/index')
const {Comment} = require('./models/index')
const {User} = require('./models/index')
const {Service} = require('./models/index')



const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/welcome', (req, res) => {
    return res.send('Welcome to my app');
})

app.get('/products', async(req, res) => {
    const products = await Product.findAll({ include: Comment });

    return res.json(products);
})

app.get('/comments', async(req, res) => {
    const comments = await Comment.findAll({ include: Product});

    return res.json(comments);
})

app.get('/users', async(req, res) => {
    const users = await User.findAll({ 
        include: [
            {
              model: Service,
              as: "services",
              through: {
                attributes: [],
              },
              attributes: {exclude: ['name']},
            },
          ],
          attributes: {exclude: ['name']},

    });

    return res.json(users);
})

app.listen(3000, () => console.log('Server running'));