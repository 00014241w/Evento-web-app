namespace EventsManager.Models
{
    public class Event
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public DateTime Time { get; set; }
        public string Organizer { get; set; }
    }
}
