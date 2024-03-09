using EventsManager.Models;

namespace EventsManager.Repositories
{
    public interface IEventsRepository
    {
        Task<IEnumerable<Event>> GetAllEvents();
        Task<Event> GetSingleEvent(int id);
        Task CreateEvent(Event Event);
        Task UpdateEvent(Event Event);
        Task DeleteEvent(int id);
    }
}
