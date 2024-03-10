using EventsManager.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsManager.Data
{
    public class EventManagerDbContext : DbContext
    {
        public EventManagerDbContext(DbContextOptions<EventManagerDbContext> options) : base(options) { }

        public DbSet<Event> events { get; set; }
        public DbSet<Category> categories { get; set; }
    }
}
