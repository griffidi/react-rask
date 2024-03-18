using Bogus;
using Rask.Api.Data.Models;

namespace Rask.Api.Data;

public static class Seeder
{
    public static void SeedData()
    {
        Randomizer.Seed = new(999998);
        Faker.DefaultStrictMode = true;

        Faker<Department> departments = new();
        departments
            .RuleFor(d => d.Id, f => Guid.NewGuid())
            .RuleFor(d => d.Name, f => f.Name.JobArea())
            .RuleFor(u => u.DateCreated, f => f.Date.Past())
            .RuleFor(u => u.DateModified, f => f.Date.Past())
            .Ignore(u => u.Employees);

        var generatedDepartments = departments.Generate(8);

        Faker<User> users = new();
        users
            .RuleFor(u => u.Id, f => Guid.NewGuid())
            .RuleFor(u => u.UserName, (f, u) => f.Internet.UserName(u.FirstName, u.LastName))
            .RuleFor(u => u.FirstName, f => f.Name.FirstName())
            .RuleFor(u => u.LastName, f => f.Name.LastName())
            .RuleFor(u => u.Email, f => f.Internet.Email())
            .RuleFor(u => u.DateCreated, f => f.Date.Past())
            .RuleFor(u => u.DateModified, f => f.Date.Past());

        var generatedUsers = users.Generate(50);

        Faker<Employee> employees = new();
        employees
            .RuleFor(e => e.Id, f => Guid.NewGuid())
            .RuleFor(e => e.FirstName, f => f.Name.FirstName())
            .RuleFor(e => e.LastName, f => f.Name.LastName())
            .RuleFor(e => e.Email, f => f.Internet.Email())
            .RuleFor(e => e.Phone, f => f.Phone.PhoneNumber())
            .RuleFor(e => e.Gender, f => f.Random.Enum<Gender>())
            .RuleFor(e => e.StreetAddress, f => f.Address.StreetAddress())
            .RuleFor(e => e.City, f => f.Address.City())
            .RuleFor(e => e.State, f => f.Address.StateAbbr())
            .RuleFor(e => e.ZipCode, f => f.Address.ZipCode())
            .RuleFor(e => e.JobTitle, f => f.Name.JobTitle())
            .RuleFor(e => e.DepartmentId, f => f.PickRandom(generatedDepartments).Id)
            .RuleFor(e => e.DateCreated, f => f.Date.Past())
            .RuleFor(e => e.DateModified, f => f.Date.Past())
            .Ignore(u => u.Department);

        var generatedEmployees = employees.Generate(100);

        using RaskDbContext context = new();

        if (File.Exists(context.DbPath))
        {
            File.Delete(context.DbPath);
        }

        if (!context.Database.EnsureCreated())
        {
            throw new Exception("Database not created.");
        }

        context.Departments.AddRange(generatedDepartments);
        context.Users.AddRange(generatedUsers);
        context.Employees.AddRange(generatedEmployees);

        context.SaveChanges();
    }
}
