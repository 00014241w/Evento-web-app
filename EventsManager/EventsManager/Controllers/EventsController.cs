using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EventsManager.Data;
using EventsManager.Models;
using EventsManager.Repositories;

namespace EventsManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly EventManagerDbContext _context;
        private readonly IEventsRepository _eventsRepository;

        public EventsController(IEventsRepository eventsRepository)
        { 
            _eventsRepository = eventsRepository;
        }

        // GET: api/Events
        [HttpGet]
        public async Task<IEnumerable<Event>> Getevents()
        {
            return await _eventsRepository.GetAllEvents();
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEvent(int id)
        {
            var @event = await _eventsRepository.GetSingleEvent(id);

            if (@event == null)
            {
                return NotFound();
            }

            return Ok(@event);
        }

        // PUT: api/Events/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvent(int id, Event @event)
        {
            if (id != @event.ID)
            {
                return BadRequest();
            }

            await _eventsRepository.UpdateEvent(@event);

            return NoContent();
        }

        // POST: api/Events
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Event>> PostEvent(Event @event)
        {
            _eventsRepository.CreateEvent(@event);


            return CreatedAtAction("GetEvent", new { id = @event.ID }, @event);
        }

        // DELETE: api/Events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            _eventsRepository.DeleteEvent(id);

            return NoContent();
        }
    }
}
