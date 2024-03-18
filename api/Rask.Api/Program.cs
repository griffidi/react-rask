using Microsoft.EntityFrameworkCore;
using Rask.Api.Data;
using Rask.Api.Data.Models;
using Rask.Api.Db;
using Rask.Api.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<RaskDatabaseSettings>(
builder.Configuration.GetSection("RaskDatabase"));

builder.Services.AddDbContextFactory<RaskDbContext>(options =>
        options
            .UseSqlite(
                DbConnectionString.Create(true))
            .LogTo(m => System.Diagnostics.Debug.WriteLine(m)), ServiceLifetime.Transient);

builder.Services.AddMemoryCache();

builder.Services.AddTransient<IEmployeesService, EmployeesService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    Seeder.SeedData();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

app.Run();
