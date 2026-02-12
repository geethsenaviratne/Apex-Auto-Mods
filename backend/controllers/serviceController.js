import Service from '../models/service.js';

// Get all car modification services
export async function getAllServices(req, res) {

  try {
    const services = await Service.find();
    res.json(services);

  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching services', error: error.message 
    });
  }
}

// Add a new car modification service
export async function addService(req, res) {
  try {
    const { name, description, price } = req.body;

     // Find latest serviceId
    const latestService = await Service.find().sort({ 
        serviceId: -1 
    }).limit(1);

    let serviceId;

    if (latestService.length === 0) {
        
      serviceId = "SRV0001";

    } else {
      const currentServiceId = latestService[0].serviceId;
      const numberString = currentServiceId.replace('SRV', '');
      const number = parseInt(numberString);
      const newNumber = (number + 1).toString().padStart(4, '0');
      serviceId = "SRV" + newNumber;
    }

    const newService = new Service({ serviceId, name, description, price });
    await newService.save();

    res.status(200).json({ 
        message: 'Service added successfully', service: newService 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error adding service', error: error.message 
    });
  }
}