namespace TenantService.Core
{
    public class Tenant
    {
        public TenantId TenantId { get; set; }  = new TenantId(Guid.NewGuid());
        public string Name { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
    }
}
