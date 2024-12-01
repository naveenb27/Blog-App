const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broken');
};

export default errorHandler;
