using EventsManager.Data;
using EventsManager.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsManager.Repositories
{
    public class EventsRepository : IEventsRepository
    {
        private readonly EventManagerDbContext _dbContext;

        public EventsRepository(EventManagerDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<Event>> GetAllEvents()
        {
            return await _dbContext.events.Include(e => e.CategoryName).ToListAsync();
        }

        public async Task<Event> GetSingleEvent(int id)
        {
            return await _dbContext.events.Include(e => e.CategoryName).FirstOrDefaultAsync(e => e.ID == id);
        }

        public async Task CreateEvent(Event Event)
        {
            await _dbContext.events.AddAsync(Event);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteEvent(int id)
        {
            var Event = await _dbContext.events.FirstOrDefaultAsync(e => e.ID == id);
            if(Event != null)
            {
                _dbContext.Remove(Event);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateEvent(Event Event)
        {
            _dbContext.Entry(Event).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
