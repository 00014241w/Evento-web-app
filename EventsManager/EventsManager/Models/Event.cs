using System;
using EventsManager.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EventsManager.Models
{
    public class Event
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "Title is required!")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Description is required!")]
        public string Description { get; set; }
        [Required(ErrorMessage = "Location is required!")]
        public string Location { get; set; }
        [Required(ErrorMessage = "TIme is required!")]
        public DateTime Time { get; set; }
        public string Organizer { get; set; }
        public int? CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public Category? CategoryName { get; set; }
    }

}
