using EventsManager.Models;

namespace EventsManager.Repositories
{
    public interface ICategoriesRepository
    {
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category> GetSingleCategory(int id);
        Task CreateCategory(Category Category);
        Task UpdateCategory(Category Category);
        Task DeleteCategory(int id);
    }
}
