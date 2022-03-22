using System.Collections.Generic;

namespace TenantService.Core
{
    public class ResponseBase
    {
        public List<string> ValidationErrors { get; set; }
    }
}
