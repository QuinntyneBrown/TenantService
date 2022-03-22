using StronglyTypedIds;

namespace TenantService.Core
{
    [StronglyTypedId(backingType: StronglyTypedIdBackingType.Guid, converters: StronglyTypedIdConverter.EfCoreValueConverter)]
    public partial struct TenantId { }
}
