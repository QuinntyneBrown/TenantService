using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TenantService.Core;
using TenantService.Core.Interfaces;

namespace TenantService.Core
{

    public class GetTenantsRequest: IRequest<GetTenantsResponse> { }
    public class GetTenantsResponse: ResponseBase
    {
        public List<TenantDto> Tenants { get; set; }
    }
    public class GetTenantsHandler: IRequestHandler<GetTenantsRequest, GetTenantsResponse>
    {
        private readonly ITenantServiceDbContext _context;
        private readonly ILogger<GetTenantsHandler> _logger;
    
        public GetTenantsHandler(ITenantServiceDbContext context, ILogger<GetTenantsHandler> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
    
        public async Task<GetTenantsResponse> Handle(GetTenantsRequest request, CancellationToken cancellationToken)
        {
            return new () {
                Tenants = await _context.Tenants.AsNoTracking().ToDtosAsync(cancellationToken)
            };
        }
        
    }

}
