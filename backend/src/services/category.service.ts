import prisma from '../client';
const getCategories = async (page:number) =>{
    try {
        const categories = await prisma.category.findMany({
          take: 6,
          skip: (page - 1) * 6 || 0,
        });
        return categories;
      } catch (error) {
        console.error(error);
        throw new Error('Categories not found');
      }
}
export default {getCategories}