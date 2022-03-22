using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;

namespace TenantService.Core
{
    public static class TenantExtensions
    {
        public static TenantDto ToDto(this Tenant tenant)
        {
            return new ()
            {
                TenantId = tenant.TenantId.Value,
                Name = tenant.Name,
                Key = tenant.Key,
            };
        }
        
        public static async Task<List<TenantDto>> ToDtosAsync(this IQueryable<Tenant> tenants, CancellationToken cancellationToken)
        {
            return await tenants.Select(x => x.ToDto()).ToListAsync(cancellationToken);
        }
        
        public static List<TenantDto> ToDtos(this IEnumerable<Tenant> tenants)
        {
            return tenants.Select(x => x.ToDto()).ToList();
        }
        
    }
}
