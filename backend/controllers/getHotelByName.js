

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getHotelByName = async (req, res) => {
  const { name } = req.params; // Get the hotel name from the route parameter
  // console.log(name)
  try {
    const ishotel = await prisma.hotel.findFirst({
      where: {
        title: name
      }
    }
    );

    if (!ishotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    else {
      // console.log(ishotel)
      try {
        const roomData = await prisma.room.findMany({
          where: {
            hotelId: ishotel.id
          }
        })
        return res.status(200).json({roomData:roomData,hotelData:ishotel});

      } catch (error) {
        console.log(error);
        return res.status(403).json("No room found")
      }
      finally {
        await prisma.$disconnect();
      }
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotel information' });
  }
};

module.exports = getHotelByName;