using EventsManager.Data;
using Microsoft.EntityFrameworkCore;
using EventsManager.Controllers;
using Microsoft.Build.Framework;
using EventsManager.Repositories;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


// Add services to the container.
builder.Services.AddCors(options => options.AddPolicy(MyAllowSpecificOrigins, policy =>
{
    policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
}));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EventManagerDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("EventManagerConnectionStr")));
builder.Services.AddScoped<IEventsRepository, EventsRepository>();
builder.Services.AddScoped<ICategoriesRepository, CategoriesRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
