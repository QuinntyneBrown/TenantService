using TenantService.Core;
using TenantService.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace TenantService.Infrastructure.Data
{
    public class TenantServiceDbContext: DbContext, ITenantServiceDbContext
    {
        public DbSet<Tenant> Tenants { get; private set; }
        public TenantServiceDbContext(DbContextOptions options)
            :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TenantServiceDbContext).Assembly);
        }
        
    }
}
