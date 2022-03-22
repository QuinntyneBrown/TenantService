using System;

namespace TenantService.Core
{
    public class Tenant
    {
        public TenantId TenantId { get; set; }  = new TenantId(Guid.NewGuid());
        public string Name { get; set; }
        public string Key { get; set; }
    }
}
