const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagsData) {
      res.status(404).json({ message: 'No tags with this id!' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagsData = await Tag.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});



// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.update({
      tag_name: {
        id: req.body.tag_name,
      }
    },
      {
        where: {
          id: req.params.id
        }
      });
    if (!tagsData) {
      res.status(404).json({ message: 'No tags with this id!' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagsData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagsData) {
      res.status(404).json({ message: 'No tags with this id!' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



// //TODO GET all users
//*get
// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll();
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //TODO CREATE a new user
//* post
// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //TODO GET one user
//* get 
// router.get('/:id', async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.params.id);
//     if (!userData) {
//       res.status(404).json({ message: 'No user with this id!' });
//       return;
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //TODO UPDATE a user
//* put
// router.put('/:id', async (req, res) => {
//   try {
//     const userData = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!userData[0]) {
//       res.status(404).json({ message: 'No user with this id!' });
//       return;
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //TODO DELETE a user
//* delete
// router.delete('/:id', async (req, res) => {
//   try {
//     const userData = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!userData) {
//       res.status(404).json({ message: 'No user with this id!' });
//       return;
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
