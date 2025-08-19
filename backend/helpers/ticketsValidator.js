const Joi = require('joi');

// Schema for creating a ticket
const createTicketSchema = Joi.object({
  title: Joi.string().min(3).max(255).required().messages({
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters',
    'string.max': 'Title cannot exceed 255 characters'
  }),
  description: Joi.string().min(5).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description must be at least 5 characters'
  }),
  priority: Joi.string().valid('Low', 'Medium', 'High').required().messages({
    'any.only': 'Priority must be Low, Medium, or High',
    'string.empty': 'Priority is required'
  })
});



// Middleware function for create ticket validation
const validateCreateTicket = (req, res, next) => {
  const { error } = createTicketSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      errors: error.details.map(err => err.message)
    });
  }
  next();
};

module.exports = { validateCreateTicket };
