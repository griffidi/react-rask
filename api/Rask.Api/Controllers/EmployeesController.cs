using Microsoft.AspNetCore.Mvc;
using Rask.Api.Data.Models;

namespace Rask.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeesController : ControllerBase
{
    readonly ILogger<EmployeesController> _logger;
    readonly IEmployeesService _employeesService;

    public EmployeesController(ILogger<EmployeesController> logger, IEmployeesService employeesService)
    {
        _logger = logger;
        _employeesService = employeesService;
    }

    [HttpGet(Name = "GetEmployees")]
    public async Task<IEnumerable<Employee>> Get()
    {
        return await _employeesService.GetEmployeesAsync();
    }

    [HttpGet("{id}", Name = "GetEmployee")]
    public async Task<Employee> Get(Guid id)
    {
        var employee = await _employeesService.GetEmployeeAsync(id);
        if (employee is null)
        {
            throw new KeyNotFoundException();
        }
        return employee;
    }
}
