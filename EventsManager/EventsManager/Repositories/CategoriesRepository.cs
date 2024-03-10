using EventsManager.Data;
using EventsManager.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsManager.Repositories
{
    public class CategoriesRepository : ICategoriesRepository
    {
        private readonly EventManagerDbContext _dbContext;

        public CategoriesRepository(EventManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            return await _dbContext.categories.ToListAsync();
        }

        public async Task<Category> GetSingleCategory(int id)
        {
            return await _dbContext.categories.FirstOrDefaultAsync(c => c.CategoryId == id);
        }

        public async Task CreateCategory(Category Category)
        {
            await _dbContext.categories.AddAsync(Category);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteCategory(int id)
        {
            var Category = await _dbContext.categories.FirstOrDefaultAsync(c => c.CategoryId == id);
            if(Category != null)
            {
                _dbContext.Remove(Category);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateCategory(Category Category)
        {
            _dbContext.Entry(Category).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
