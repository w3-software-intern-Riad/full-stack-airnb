const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const insertData = async (req, res) => {
    const hotelData=req.body;
    try {
        // Insert a hotel
        const hotel = await prisma.hotel.create({
            data: hotelData,
            
        });

      return res.status(200).json({message:"Hotel data is created successfully",data:hotel});
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "Data creation is failed" });
    }
    finally {
        await prisma.$disconnect();
    }
}

module.exports = insertData;