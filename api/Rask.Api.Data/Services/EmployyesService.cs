using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Rask.Api.Data.Models;

/// <inheritdoc/>
public class EmployeesService : IEmployeesService
{
    readonly ILogger<EmployeesService> _logger;
    readonly IDbContextFactory<RaskDbContext> _dbContextFactory;

    public EmployeesService(ILogger<EmployeesService> logger, IDbContextFactory<RaskDbContext> dbContextFactory)
    {
        _logger = logger;
        _dbContextFactory = dbContextFactory;
    }

    public async Task<IEnumerable<Employee>> GetEmployeesAsync()
    {
        using var context = _dbContextFactory.CreateDbContext();
        return await context.Employees.ToListAsync();
    }

    public async Task<Employee?> GetEmployeeAsync(Guid id)
    {
        using var context = _dbContextFactory.CreateDbContext();
        return await context.Employees.FirstOrDefaultAsync(e => e.Id == id);
    }
}
