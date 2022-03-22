using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace TenantService.Core.Interfaces
{
    public interface ITenantServiceDbContext
    {
        DbSet<Tenant> Tenants { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        
    }
}
