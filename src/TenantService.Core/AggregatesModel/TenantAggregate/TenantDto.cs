using System;

namespace TenantService.Core
{
    public class TenantDto
    {
        public Guid? TenantId { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
    }
}
