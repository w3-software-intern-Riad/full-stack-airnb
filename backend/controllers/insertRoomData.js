const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const insertRoomData = async (req, res) => {
    const { id } = req.params; // Extract the hotel ID from the route parameter
    const { roomImage, roomTitle, bedroomCount } = req.body; // Extract room data from the request body
  
    try {
      // Insert a new room record with the provided data and associate it with the specified hotel ID
      const newRoom = await prisma.room.create({
        data: {
          hotelId: parseInt(id), // Ensure the ID is an integer
          roomImage,
          roomTitle,
          bedroomCount,
        },
      });
  
      return res.status(201).json(newRoom); // Respond with the created room and HTTP 201 Created
    } catch (error) {
      res.status(500).json({ error: 'Failed to create room' }); // Respond with an error message and HTTP 500 Internal Server Error
    }
    finally{
      await prisma.$disconnect();
    }
  };
module.exports=insertRoomData;
