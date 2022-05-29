const router = require('express').Router();
const bcrypt = require('bcrypt');

let User = require('./modal');



router.route('/add').post((req, res) => {
	const userData = new User({
		email: req.body.email,
		password: req.body.password,
		username: req.body.username,
		phone: req.body.phone
	});

	User.findOne({
		email: req.body.email
	})
		.then((user) => {
			if (!user) {
				bcrypt.hash(req.body.password, 8, (err, hash) => {
					userData.password = hash;
					User.create(userData)
						.then((user) => {
							res.status(200).json({ status: user.email + ' registered!' });
						})
						.catch((err) => {
							res.send('error: ' + err);
						});
				});
			} else {
				res.json({ error: ' user already exists' });
			}
		})
		.catch((err) => {
			res.send('error: ' + err);
		});
});

router.route('/').get((req, res) => {
	User.find().then((users) => res.json(users)).catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/signin').post( (req, res) => {

  User.findOne({email:req.body.email})
  .then((user)=>{
		if(!user) res.status(400).json({error:"user not found please signup first"})
	  else{
		 bcrypt.compare(req.body.password , user.password , (err,match)=>{
				if(err) res.status(500).json(err)
				else if(match) res.status(200).json("kaam ho gya")
				else res.status(403).json({err: "password not match"})
		 })
  }
  })
	





});

router.route('/:_id').get((req, res) => {
	User.findById(req.params._id)
		.then((exercise) => res.json(exercise))
		.catch((err) => res.status(400).json('error' + err));
});

// router.route('/:_id').delete((req, res) => {
// 	User.findByIdAndDelete(req.params._id).then((err) => res.json('error ' + err));
// });

// router.route('/:_id').put((req, res) => {
// 	User.findOneAndUpdate(req.params._id).then((user) => (user.username = req.body.username));

// 	User.save().then(() => res.json('user Upload')).catch((err) => res.status(400).json('error' + err));
// });

router.route('/:_id').delete(function(req, res) {
	User.findByIdAndDelete(req.params._id, { $set: req.body }, function(err, response) {
		if (err) {
			console.log(err);
		}
		res.send('Your Data Has Been deleted');
	});
});

router.route('/:_id').put(function(req, res) {
	User.findByIdAndUpdate(req.params._id, { $set: req.body }, function(err, response) {
		if (err) {
			console.log(err);
		}
		res.send('Your Account Has Been Updated successfully!');
	});
});

module.exports = router;
