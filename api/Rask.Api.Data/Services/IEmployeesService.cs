using Rask.Api.Data.Models;

/// <summary>
/// Service for managing employees.
/// </summary>
public interface IEmployeesService
{
    /// <summary>
    /// Get all employees.
    /// </summary>
    /// <returns>All employees.</returns>
    Task<IEnumerable<Employee>> GetEmployeesAsync();
    /// <summary>
    /// Get an employee by id.
    /// </summary>
    /// <param name="id">The ID of the employee to get.</param>
    /// <returns>Employee with the given ID.</returns>
    Task<Employee?> GetEmployeeAsync(Guid id);
}
